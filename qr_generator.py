# qr_generator.py
import qrcode
import os

# URL of the React MVP (update after Netlify deploy)
url = "https://talkingbus.netlify.app/"

# Output path in public/images so React can serve it
output_path = os.path.join("public", "images", "qr_code.png")

# Create QR code
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H, # type: ignore
    box_size=10,
    border=4,
)
qr.add_data(url)
qr.make(fit=True)

img = qr.make_image(fill_color="black", back_color="white")

# Ensure directory exists
os.makedirs(os.path.dirname(output_path), exist_ok=True)

# Save QR code
img.save(output_path) # type: ignore
print(f"QR code generated at {output_path}")
