import json

with open("products.json", "r", encoding="latin-1") as file:
    products = json.load(file)

with open("products.json", "w", encoding="utf-8") as file:
    json.dump(products, file, indent=2, ensure_ascii=False)

print("✅ File converted to UTF-8!")