# How to Create a Contact Card (vCard) QR Code

A contact card QR code lets someone save your details to their phone with a single scan. Instead of typing your name, number and email into their contacts, they tap save. It is a neat upgrade for business cards, email signatures, name badges and event stands.

## What is a vCard?

A vCard is a standard format for sharing contact details. Phones and email apps understand it, so when a QR code holds vCard text, the phone offers to add a new contact automatically. The details are stored inside the code itself, so it works without an internet connection.

## The vCard format

A basic vCard looks like this:

```
BEGIN:VCARD
VERSION:3.0
N:Doe;John
FN:John Doe
ORG:Example Company
TITLE:Sales Manager
TEL;TYPE=CELL:+2348031234567
EMAIL:john@example.com
URL:https://example.com
END:VCARD
```

Here is what each line means:

- **N** is the name in the order last name, then first name, separated by a semicolon.
- **FN** is the full name as it should display.
- **ORG** is your company or organisation.
- **TITLE** is your job title.
- **TEL** is your phone number in international format, with the country code.
- **EMAIL** is your email address.
- **URL** is your website.

Each line must be on its own line, starting with BEGIN:VCARD and ending with END:VCARD.

## Step 1: Write your details

Copy the template above and replace the example details with your own. Keep it short. The more you add, the denser the QR code becomes, and the harder it is to scan. Name, phone, email and website are usually enough.

## Step 2: Generate the QR code

1. Open SnapQR.
2. Paste the full vCard text, including every line, into the input box.
3. Generate the code and download it.

Because a vCard holds more text than a simple link, use medium error correction and make the printed code a bit larger than usual, at least 3 cm wide.

## Step 3: Test it

Scan the code with an iPhone and an Android phone. Both should offer to create a new contact with all your details filled in. If something is missing, check for typos in the field names, and make sure each field is on a separate line.

## Where to use it

- The back of your business card
- Your email signature
- Name badges at events
- Your shop or office window
- Slides at the end of a presentation

## Things to know

- A vCard QR code is static. If your phone number or email changes, you will need a new code.
- Do not include private information you would not want strangers to see, since anyone who scans can read it.
- If your details change often, link to a contact page on your website instead.

## Summary

A vCard QR code lets people save you as a contact in seconds. Write a short, accurate card, keep the code large enough, test on several phones, and use it wherever people might want to reach you.
