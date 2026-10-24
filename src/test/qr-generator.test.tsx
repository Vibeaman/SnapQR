import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { QrGenerator } from "@/components/site/QrGenerator";

const { toDataURL } = vi.hoisted(() => ({ toDataURL: vi.fn() }));
vi.mock("qrcode", () => ({ default: { toDataURL } }));
afterEach(() => { cleanup(); vi.restoreAllMocks(); toDataURL.mockReset(); });

describe("QR generation", () => {
  it("renders and downloads the PNG using the selected colors, size and correction level", async () => {
    const png = "data:image/png;base64,dGVzdA==";
    toDataURL.mockResolvedValue(png);
    render(<QrGenerator />);
    fireEvent.change(screen.getByLabelText("Enter your URL or text to generate a QR code"), { target: { value: " https://example.com " } });
    fireEvent.change(screen.getByLabelText("Foreground"), { target: { value: "#123456" } });
    fireEvent.change(screen.getByLabelText("Background"), { target: { value: "#fedcba" } });
    fireEvent.change(screen.getByLabelText(/Image size/), { target: { value: "768" } });
    fireEvent.change(screen.getByLabelText("Correction level"), { target: { value: "H" } });
    fireEvent.click(screen.getByRole("button", { name: "Generate QR Code" }));
    await waitFor(() => expect(toDataURL).toHaveBeenCalledWith(expect.any(HTMLCanvasElement), "https://example.com", {
      type: "image/png", width: 768, margin: 2, errorCorrectionLevel: "H", color: { dark: "#123456", light: "#fedcba" },
    }));
    expect(await screen.findByRole("img")).toHaveAttribute("src", png);
    const download = screen.getByRole("link", { name: "Download PNG" });
    expect(download).toHaveAttribute("href", png);
    expect(download).toHaveAttribute("download", "snapqr-code.png");
  });

  it("clears an old PNG and reports rendering failures rather than offering a stale download", async () => {
    toDataURL.mockResolvedValueOnce("data:image/png;base64,dGVzdA==").mockRejectedValueOnce(new Error("Canvas failed"));
    const log = vi.spyOn(console, "error").mockImplementation(() => {});
    render(<QrGenerator />);
    fireEvent.change(screen.getByLabelText("Enter your URL or text to generate a QR code"), { target: { value: "https://example.com" } });
    fireEvent.click(screen.getByRole("button", { name: "Generate QR Code" }));
    await screen.findByRole("img");
    fireEvent.click(screen.getByRole("button", { name: "Generate QR Code" }));
    await screen.findByRole("alert");
    expect(log).toHaveBeenCalled();
    expect(screen.queryByRole("link", { name: "Download PNG" })).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Generate QR Code" })).toBeEnabled();
  });
});