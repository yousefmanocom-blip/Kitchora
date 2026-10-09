// Database of items parsed from the full Kitchora menu (2 menu sheets)
// ملاحظة: لو الصنف مفيهوش image بيظهر أيقونة القسم تلقائياً. تقدر تضيف image: "images/اسم.jpg" لأي صنف.
const menuData = [
  // ===== heat =====
  { id: 1, nameAr: "نص فرخة مشوية سوبر", nameEn: "Half Super Grilled Chicken", category: "heat", price: 150, image: "https://png.pngtree.com/png-clipart/20241121/original/pngtree-delicious-roast-chicken-png-image_17277196.png" },
  { id: 2, nameAr: "تشيكن صويا صوص", nameEn: "Chicken Soy Sauce", category: "heat", price: 135, image: "https://png.pngtree.com/png-clipart/20241102/original/pngtree-soy-sauce-chicken-png-image_16663584.png" },
  { id: 3, nameAr: "تشيكن سويت & ساور", nameEn: "Chicken Sweet & Sour", category: "heat", price: 135, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVWB_e3Sl_cqvzEW_lINnSCX8HGIiRmZVn6Jx51W87OA&s" },
  { id: 4, nameAr: "تشيكن باربيكيو", nameEn: "Chicken BBQ", category: "heat", price: 135, image: "https://png.pngtree.com/png-vector/20250110/ourlarge/pngtree-juicy-bbq-glazed-grilled-chicken-wings-recipe-png-image_15129221.png" },
  { id: 5, nameAr: "شاورما فراخ مستوي", nameEn: "Cooked Chicken Shawarma", category: "heat", price: 150, image: "https://img.pikbest.com/png-images/20241128/chicken-shawarma-transparent-background-image_11141899.png!sw800" },
  { id: 6, nameAr: "نص محشي كرنب مستوي", nameEn: "Half Cooked Cabbage Roll", category: "heat", price: 80, image: "https://safy-kitchen.com/wp-content/uploads/2024/05/%D9%85%D8%AD%D8%B4%D9%8A-%D9%83%D8%B1%D9%86%D8%A8-%D9%85%D8%B3%D8%AA%D9%88%D9%8A-800x519-sqt.webp" },
  { id: 7, nameAr: "نص محشي ورق عنب مستوي", nameEn: "Half Cooked Grape Leaves", category: "heat", price: 90, image: "https://portal.elsupplier.com/backend/public/storage/products/1633272267.jpeg" },
  { id: 8, nameAr: "طبق بامية باللحمة", nameEn: "Okra with Meat Dish", category: "heat", price: 180, image: "https://www.eldahan.com/foods/%D8%B7%D8%A7%D8%AC%D9%86_%D8%A8%D8%A7%D9%85%D9%8A%D8%A9_%D8%A8%D8%A7%D9%84%D9%84%D8%AD%D9%85%D8%A9_%D8%A3%D8%B1%D8%B2_%D8%B3%D9%84%D8%B7%D8%A9.jpg" },
  { id: 9, nameAr: "طبق سجق اسكندراني", nameEn: "Alexandrian Sausage Dish", category: "heat", price: 135, image: "https://i.ytimg.com/vi/BHJun45lzZE/sddefault.jpg" },
  { id: 10, nameAr: "شاورما لحم مستوي", nameEn: "Cooked Beef Shawarma", category: "heat", price: 190, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBHggFTQY7Hbk0nY8xk9Q8JdFIMqNNAEyohiasc--wc7z-R5S58KCf2k&s=10" },
  { id: 11, nameAr: "طبق لحمة عصاج", nameEn: "Minced Beef Dish", category: "heat", price: 110, image: "https://png.pngtree.com/png-vector/20250326/ourmid/pngtree-delicious-spiced-minced-meat-in-a-wooden-bowl-with-fresh-rosemary-png-image_15875214.png" },
  { id: 12, nameAr: "طبق كباب حلة بالسمنة", nameEn: "Kebab Hella with Ghee", category: "heat", price: 140, image: "https://mediaaws-live.almasryalyoum.com/almasryalyoum/uploads/images/2025/12/01/1475395.webp" },
  { id: 13, nameAr: "طبق بيكاتا بالمشروم", nameEn: "Piccata Mushroom Dish", category: "heat", price: 155, image: "https://img.youm7.com/ArticleImgs/2017/6/19/72960-%D8%A7%D9%84%D8%A8%D9%8A%D9%83%D8%A7%D8%AA%D8%A7-%D8%A8%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D9%85.jpg" },
  { id: 14, nameAr: "طبق كفتة مشوية", nameEn: "Grilled Kofta Dish", category: "heat", price: 240, image: "https://png.pngtree.com/png-clipart/20241110/original/pngtree-3d-raw-beef-kofta-kebab-skewers-on-a-meat-png-image_16826725.png" },
  { id: 15, nameAr: "مكرونة نجرسكو (غويطة)", nameEn: "Deep Dish Negresco Pasta", category: "heat", price: 240, image: "https://png.pngtree.com/png-vector/20250122/ourmid/pngtree-penne-pasta-with-marinara-sauce-in-wooden-bowl-png-image_15306720.png" },
  { id: 16, nameAr: "مكرونة بشاميل (غويطة)", nameEn: "Deep Dish Bechamel Pasta", category: "heat", price: 200, image: "https://tagensetto.com/cdn/shop/files/72.png?v=1704902523&width=1946" },
  { id: 17, nameAr: "لازنيا بشاميل باللحمة", nameEn: "Beef Bechamel Lasagna", category: "heat", price: 270, image: "https://png.pngtree.com/png-vector/20250919/ourmid/pngtree-delicious-square-cut-lasagna-with-rich-meat-sauce-and-bechamel-layers-png-image_17503109.webp" },
  { id: 18, nameAr: "خرشوف بشاميل باللحمة", nameEn: "Artichoke Bechamel with Meat", category: "heat", price: 170, image: "https://tagensetto.com/cdn/shop/files/72.png?v=1704902523&width=1946" },
  { id: 19, nameAr: "كوسة بشاميل باللحمة", nameEn: "Zucchini Bechamel with Meat", category: "heat", price: 150, image: "https://tagensetto.com/cdn/shop/files/72.png?v=1704902523&width=1946" },
  { id: 20, nameAr: "سبانخ بشاميل باللحمة", nameEn: "Spinach Bechamel with Meat", category: "heat", price: 165, image: "https://tagensetto.com/cdn/shop/files/72.png?v=1704902523&width=1946" },
  { id: 21, nameAr: "مسقعة بشاميل باللحمة", nameEn: "Moussaka Bechamel with Meat", category: "heat", price: 185, image: "https://tagensetto.com/cdn/shop/files/72.png?v=1704902523&width=1946" },
  { id: 22, nameAr: "صنية جلاش باللحمة", nameEn: "Meat Phyllo Tray", category: "heat", price: 155 },

  // ===== legumes =====
  { id: 23, nameAr: "عرض 3 بليلة مسلوقة", nameEn: "Offer 3 Boiled Baleela", category: "legumes", price: 33 },
  { id: 24, nameAr: "عرض 3 فول مدمس", nameEn: "Offer 3 Ful Medames", category: "legumes", price: 50 },
  { id: 25, nameAr: "حمص الشام مسلوق", nameEn: "Boiled Chickpeas", category: "legumes", price: 35 },
  { id: 26, nameAr: "فاصوليا بيضا مسلوقة", nameEn: "Boiled White Beans", category: "legumes", price: 30 },
  { id: 27, nameAr: "لوبيا مسلوقة", nameEn: "Boiled Black-eyed Peas", category: "legumes", price: 30 },

  // ===== processed =====
  { id: 28, nameAr: "نص كفتة لحم", nameEn: "Half Beef Kofta", category: "processed", price: 130, image: "https://png.pngtree.com/png-vector/20240630/ourmid/pngtree-seekh-kebab-meat-skewers-png-image_12931664.png" },
  { id: 29, nameAr: "طبق كبيبة شامي", nameEn: "Shami Kebbeh Dish", category: "processed", price: 135, image: "https://img.youm7.com/ArticleImgs/2017/7/23/40255-%D8%A7%D9%84%D9%83%D8%A8%D9%8A%D8%A8%D8%A9-%D8%A7%D9%84%D8%B4%D8%A7%D9%85%D9%89.jpg" },
  { id: 30, nameAr: "نص لحمة اسكالوب", nameEn: "Half Beef Escalope", category: "processed", price: 145, image: "https://m.media-amazon.com/images/I/81tfsi3qKcL._AC_UF894,1000_QL80_.jpg" },
  { id: 31, nameAr: "نص شاورما لحمة", nameEn: "Half Raw Beef Shawarma", category: "processed", price: 160, image: "https://i.pinimg.com/736x/31/fb/24/31fb2448432737e2b821c75593a790e4.jpg" },
  { id: 32, nameAr: "طبق كفتة ارز", nameEn: "Rice Kofta Dish", category: "processed", price: 70, image: "https://img.youm7.com/ArticleImgs/2017/7/10/420939-%D9%83%D9%81%D8%AA%D8%A9-%D8%A7%D9%84%D8%A3%D8%B1%D8%B2..jpg" },
  { id: 33, nameAr: "نص طرب", nameEn: "Half Tarb", category: "processed", price: 195, image: "https://api.cezma.cloud/storage/thumbnails/products/web/1714347936temp4970391732111479972.png" },
  { id: 34, nameAr: "طبق برجر لحم", nameEn: "Beef Burger Dish", category: "processed", price: 165, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80" },
  { id: 35, nameAr: "نص كفتة فراخ", nameEn: "Half Chicken Kofta", category: "processed", price: 140, image: "https://cdn.mafrservices.com/sys-master-root/hd8/he5/13355006033950/31866_main.jpg?im=Resize=376" },
  { id: 36, nameAr: "نص استربس موز فراخ", nameEn: "Half Chicken Strips", category: "processed", price: 150, image: "https://png.pngtree.com/png-vector/20250401/ourlarge/pngtree-crispy-fried-chicken-strips-in-motion-png-image_15913099.png" },
  { id: 37, nameAr: "نص أجنحة بالبقسماط", nameEn: "Half Breaded Wings", category: "processed", price: 100, image: "https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-single-fried-chicken-wing-drumette-centered-vertically-on-a-pure-what-png-image_12783068.png" },
  { id: 38, nameAr: "نص بانية بالبقسماط", nameEn: "Half Breaded Pane", category: "processed", price: 150, image: "https://sliceanddiceegypt.com/images/uploads/slice-and-dice-egypt_142_036e37e42c2845b1f8263141523d75d3%D8%A7%D8%A7%D8%A7.jpg" },
  { id: 39, nameAr: "نص دبابيس بالبقسماط", nameEn: "Half Breaded Drumsticks", category: "processed", price: 155, image: "https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-single-fried-chicken-wing-drumette-centered-vertically-on-a-pure-what-png-image_12783068.png" },
  { id: 40, nameAr: "طبق شيش طاووق", nameEn: "Shish Tawook Dish", category: "processed", price: 145, image: "https://png.pngtree.com/png-clipart/20240120/original/pngtree-grilled-pork-shish-kebab-with-vegetables-on-white-plate-png-image_14140468.png" },
  { id: 41, nameAr: "نص كوردن بلو سلامي", nameEn: "Half Cordon Bleu Salami", category: "processed", price: 150, image: "https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-chicken-cordon-bleu-stock-photo-generative-ai-png-image_11574096.png" },
  { id: 42, nameAr: "نص كوردن تركي مدخن", nameEn: "Half Smoked Turkey Cordon Bleu", category: "processed", price: 170, image: "https://png.pngtree.com/png-vector/20240130/ourmid/pngtree-chicken-cordon-bleu-stock-photo-generative-ai-png-image_11574096.png" },
  { id: 43, nameAr: "نص شاورما فراخ", nameEn: "Half Raw Chicken Shawarma", category: "processed", price: 120, image: "https://img.pikbest.com/png-images/20241128/chicken-shawarma-transparent-background-image_11141899.png!sw800" },

  // ===== baladi =====
  { id: 44, nameAr: "طبق كوارع عجم امامي", nameEn: "Front Trotters Dish", category: "baladi", price: 280 },
  { id: 45, nameAr: "نص عكاوي بلدي", nameEn: "Half Baladi Okawi", category: "baladi", price: 225 },
  { id: 46, nameAr: "ربع لية ضاني برقي", nameEn: "Quarter Lamb Tail Fat", category: "baladi", price: 142 },
  { id: 47, nameAr: "طبق طحال مسلوق", nameEn: "Boiled Spleen Dish", category: "baladi", price: 155 },
  { id: 48, nameAr: "نص ممبار مسلوق", nameEn: "Half Boiled Mombar", category: "baladi", price: 85 },

  // ===== brazilian =====
  { id: 49, nameAr: "نص سجق سوبر", nameEn: "Half Super Sausage", category: "brazilian", price: 140, image: "https://png.pngtree.com/png-vector/20240613/ourmid/pngtree-a-classic-sausage-png-image_12736320.png" },
  { id: 50, nameAr: "نص كبدة امريكي", nameEn: "Half American Liver", category: "brazilian", price: 125, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1K3iwxcEFV1cXCpz72caiE4HQrliB3wJMRrxKecghg&s=10" },
  { id: 51, nameAr: "نص لحم مفروم", nameEn: "Half Minced Beef", category: "brazilian", price: 170, image: "https://png.pngtree.com/png-vector/20251222/ourmid/pngtree-raw-ground-meat-on-a-surface-png-image_18287283.webp" },
  { id: 52, nameAr: "نص مكعبات", nameEn: "Half Beef Cubes", category: "brazilian", price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJYeILPvK-lmZwimBD2Zlr7W12v1TD02lYmqFGVUlDSQ&s" },
  { id: 53, nameAr: "نص برازيلي شرائح", nameEn: "Half Brazilian Slices", category: "brazilian", price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJYeILPvK-lmZwimBD2Zlr7W12v1TD02lYmqFGVUlDSQ&s" },

  // ===== dairy =====
  { id: 54, nameAr: "ربع سمنة بقري", nameEn: "Quarter Cow Ghee", category: "dairy", price: 120 },
  { id: 55, nameAr: "نص زبدة بقري", nameEn: "Half Cow Butter", category: "dairy", price: 120 },
  { id: 56, nameAr: "ربع سمنة جاموسي", nameEn: "Quarter Buffalo Ghee", category: "dairy", price: 125 },
  { id: 57, nameAr: "نص زبدة جاموسي", nameEn: "Half Buffalo Butter", category: "dairy", price: 125 },
  { id: 58, nameAr: "كيس عيش حبة كاملة", nameEn: "Whole Grain Bread Bag", category: "dairy", price: 20 },
  { id: 59, nameAr: "كيس عيش سوري", nameEn: "Syrian Bread Bag", category: "dairy", price: 20 },

  // ===== frozen =====
  { id: 60, nameAr: "3 كيس ملوخية + تقلية", nameEn: "3 Molokhia Bags + Tagliya", category: "frozen", price: 46, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ezdzOGy2j7c80-uWuw4GBwTdIV1jl4zqdIW3KLhbNaomYCXaAiZh2g0&s=10" },
  { id: 61, nameAr: "2 كيس فراولة", nameEn: "2 Frozen Strawberry Bags", category: "frozen", price: 55, image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=500&q=80" },
  { id: 62, nameAr: "2 خضار مشكل + كرفس", nameEn: "2 Mixed Veggies + Celery", category: "frozen", price: 60, image: "https://png.pngtree.com/png-vector/20241117/ourmid/pngtree-a-border-of-cut-mixed-vegetables-realistic-png-image_14450156.png" },
  { id: 63, nameAr: "2 بصل مفروم", nameEn: "2 Minced Onion Bags", category: "frozen", price: 30, image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=500&q=80" },
  { id: 64, nameAr: "3 ثوم مفروم 600 جم", nameEn: "3 Minced Garlic Bags 600g", category: "frozen", price: 88, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVvhlOgXorwh2BskdMB9gL14GPEpWGasj3Fstc8maWMA&s=10" },
  { id: 65, nameAr: "كيس بامية اكسترا", nameEn: "Extra Okra Bag", category: "frozen", price: 63, image: "https://cdn.mafrservices.com/pim-content/EGY/media/product/655292/1753878603/655292_main.jpg?im=Resize=376" },
  { id: 66, nameAr: "كيس قلقاس + السلق", nameEn: "Taro + Chard Bag", category: "frozen", price: 41 },
  { id: 67, nameAr: "كيس خرشوف", nameEn: "Artichoke Bag", category: "frozen", price: 40 },
  { id: 68, nameAr: "كيس قرنبيط مجمد", nameEn: "Frozen Cauliflower Bag", category: "frozen", price: 28 },
  { id: 69, nameAr: "كيس بروكلي مجمد", nameEn: "Frozen Broccoli Bag", category: "frozen", price: 23 },
  { id: 70, nameAr: "كيس جزر مكعبات مجمد", nameEn: "Frozen Diced Carrot Bag", category: "frozen", price: 15 },
  { id: 71, nameAr: "كيس تتبيلة فراخ", nameEn: "Chicken Marinade Bag", category: "frozen", price: 40 },
  { id: 72, nameAr: "كيس عجينة فلافل بيتي", nameEn: "Homemade Falafel Mix Bag", category: "frozen", price: 25 },
  { id: 73, nameAr: "طبق بطاطا مكعبات", nameEn: "Sweet Potato Cubes Dish", category: "frozen", price: 25 },
  { id: 74, nameAr: "كيس بطاطس مكعبات", nameEn: "Potato Cubes Bag", category: "frozen", price: 25 },
  { id: 75, nameAr: "كيس ذرة سكرية", nameEn: "Sweet Corn Bag", category: "frozen", price: 38 },

  // ===== sweets =====
  { id: 76, nameAr: "مربى جزر", nameEn: "Carrot Jam", category: "sweets", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKfS6iPgM7z87KKgvP_0bt21ZUBbSoCsQNwyMTXTBRr4tgmuMxdmSJd8Fc&s=10" },
  { id: 77, nameAr: "مربى فراولة", nameEn: "Strawberry Jam", category: "sweets", price: 45, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfC5uyXmCIsE-OB_AvtRn5SLsCjIfewgaVBJ20n9C5A&s=10" },
  { id: 78, nameAr: "مربى قرع عسل", nameEn: "Pumpkin Jam", category: "sweets", price: 36, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLGxNpKyS7YNfEkXgG-u-6embMBnVH2HRqUwy6V0FiCrx77ijzdIKiasQ&s=10" },
  { id: 79, nameAr: "مربى عنب / مانجو", nameEn: "Grape / Mango Jam", category: "sweets", price: 55, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_GevMuRUSBX_44Mp0IXwJBm7icrr4zumpCfslXYJUg&s=10" },
  { id: 80, nameAr: "مربى جوافة", nameEn: "Guava Jam", category: "sweets", price: 38, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_GevMuRUSBX_44Mp0IXwJBm7icrr4zumpCfslXYJUg&s=10" },
  { id: 81, nameAr: "مربى مشمش / تين", nameEn: "Apricot / Fig Jam", category: "sweets", price: 45, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_GevMuRUSBX_44Mp0IXwJBm7icrr4zumpCfslXYJUg&s=10" },
  { id: 82, nameAr: "2 كيس كسكسي بيتي + سكر", nameEn: "2 Homemade Couscous Bags + Sugar", category: "sweets", price: 60 },
  { id: 83, nameAr: "نص فطير مشلتت", nameEn: "Half Feteer Meshaltet", category: "sweets", price: 80, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ57DXGSu0LmDS4PvGbILmcgrp06vQQkspRgfEaBnk14g&s=10" },

  // ===== sambousek =====
  { id: 84, nameAr: "سمبوسك بسطرمة + موتزاريلا (400 جم)", nameEn: "Pastrami & Mozzarella Sambousek (400g)", category: "sambousek", price: 110 },
  { id: 85, nameAr: "سمبوسك لحمة عصاج (400 جم)", nameEn: "Minced Beef Sambousek (400g)", category: "sambousek", price: 85 },
  { id: 86, nameAr: "سمبوسك جبنة قريش بالقدونس (400 جم)", nameEn: "Cottage Cheese & Parsley Sambousek (400g)", category: "sambousek", price: 60 },
  { id: 87, nameAr: "سمبوسك سبانخ + موتزاريلا (400 جم)", nameEn: "Spinach & Mozzarella Sambousek (400g)", category: "sambousek", price: 60 },
  { id: 88, nameAr: "سمبوسك مشكل خضار (400 جم)", nameEn: "Mixed Veggies Sambousek (400g)", category: "sambousek", price: 60 },
  { id: 89, nameAr: "سمبوسك موتزاريلا بتشد (400 جم)", nameEn: "Stretchy Mozzarella Sambousek (400g)", category: "sambousek", price: 85 },
  { id: 90, nameAr: "سمبوسك فراخ + موتزاريلا (400 جم)", nameEn: "Chicken & Mozzarella Sambousek (400g)", category: "sambousek", price: 90 },

  // ===== stuffed =====
  { id: 91, nameAr: "كيلو محشي ورق عنب", nameEn: "1kg Stuffed Grape Leaves", category: "stuffed", price: 98, image: "https://portal.elsupplier.com/backend/public/storage/products/1633272267.jpeg" },
  { id: 92, nameAr: "عرض 2 كيلو محشي كرنب", nameEn: "Offer 2kg Stuffed Cabbage", category: "stuffed", price: 145, image: "https://safy-kitchen.com/wp-content/uploads/2024/05/%D9%85%D8%AD%D8%B4%D9%8A-%D9%83%D8%B1%D9%86%D8%A8-%D9%85%D8%B3%D8%AA%D9%88%D9%8A-800x519-sqt.webp" },
  { id: 93, nameAr: "كيلو محشي مشكل", nameEn: "1kg Mixed Stuffed Veggies", category: "stuffed", price: 78, image: "https://portal.elsupplier.com/backend/public/storage/products/1633272267.jpeg" },
  { id: 94, nameAr: "كيلو محشي بتنجان / كوسة", nameEn: "1kg Stuffed Eggplant / Zucchini", category: "stuffed", price: 78 },
  { id: 95, nameAr: "كيلو محشي مشكل سوبر", nameEn: "1kg Super Mixed Stuffed Veggies", category: "stuffed", price: 78, image: "https://portal.elsupplier.com/backend/public/storage/products/1633272267.jpeg" },
  { id: 96, nameAr: "نص كيلو محشي طماطم", nameEn: "Half kg Stuffed Tomato", category: "stuffed", price: 30 },
  { id: 97, nameAr: "نص كيلو محشي بصل", nameEn: "Half kg Stuffed Onion", category: "stuffed", price: 30 },
  { id: 98, nameAr: "كيلو محشي بطاطس باللحمة", nameEn: "1kg Potato Stuffed with Meat", category: "stuffed", price: 125 },
  { id: 99, nameAr: "كيلو محشي كوسة باللحمة", nameEn: "1kg Zucchini Stuffed with Meat", category: "stuffed", price: 140 },
  { id: 100, nameAr: "كيلو محشي مشكل باللحمة", nameEn: "1kg Mixed Stuffed with Meat", category: "stuffed", price: 145, image: "https://portal.elsupplier.com/backend/public/storage/products/1633272267.jpeg" },
  { id: 101, nameAr: "كيلو محشي خرشوف باللحمة", nameEn: "1kg Artichoke Stuffed with Meat", category: "stuffed", price: 170 },

  // ===== quail =====
  { id: 102, nameAr: "5 سمانات مفتوح متبل (على الشوي)", nameEn: "5 Marinated Open Quails (Grill)", category: "quail", price: 265, image: "https://png.pngtree.com/png-clipart/20241121/original/pngtree-delicious-roast-chicken-png-image_17277196.png" },
  { id: 103, nameAr: "5 سمانات محشي رز / فريك / مشكل", nameEn: "5 Quails Stuffed Rice / Freekeh / Mixed", category: "quail", price: 295, image: "https://png.pngtree.com/png-clipart/20241121/original/pngtree-delicious-roast-chicken-png-image_17277196.png" },
  { id: 104, nameAr: "5 سمانات محشي رز / فريك مسلوق", nameEn: "5 Boiled Quails Stuffed Rice / Freekeh", category: "quail", price: 330, image: "https://png.pngtree.com/png-clipart/20241121/original/pngtree-delicious-roast-chicken-png-image_17277196.png" },

  // ===== poultry =====
  { id: 105, nameAr: "فرخة محشية فريك", nameEn: "Freekeh Stuffed Chicken", category: "poultry", price: 295, image: "https://png.pngtree.com/png-clipart/20241121/original/pngtree-delicious-roast-chicken-png-image_17277196.png" },
  { id: 106, nameAr: "فرخة محشية رز بالخضار", nameEn: "Rice & Veggies Stuffed Chicken", category: "poultry", price: 295, image: "https://png.pngtree.com/png-clipart/20241121/original/pngtree-delicious-roast-chicken-png-image_17277196.png" },
  { id: 107, nameAr: "فرخة متبلة جاهزة على الشوي", nameEn: "Marinated Chicken Ready to Grill", category: "poultry", price: 285, image: "https://png.pngtree.com/png-clipart/20241121/original/pngtree-delicious-roast-chicken-png-image_17277196.png" },
  { id: 108, nameAr: "فرخة مخلية متبلة", nameEn: "Marinated Boneless Chicken", category: "poultry", price: 295, image: "https://png.pngtree.com/png-clipart/20241121/original/pngtree-delicious-roast-chicken-png-image_17277196.png" },
  { id: 109, nameAr: "كيس أوراك متبلة (3 أوراك)", nameEn: "Marinated Thighs Bag (3 pcs)", category: "poultry", price: 150, image: "https://png.pngtree.com/png-clipart/20241121/original/pngtree-delicious-roast-chicken-png-image_17277196.png" },
  { id: 110, nameAr: "كيلو دبابيس متبلة", nameEn: "1kg Marinated Drumsticks", category: "poultry", price: 195, image: "https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-single-fried-chicken-wing-drumette-centered-vertically-on-a-pure-what-png-image_12783068.png" },
  { id: 111, nameAr: "كيلو أجنحة متبلة", nameEn: "1kg Marinated Wings", category: "poultry", price: 120, image: "https://png.pngtree.com/png-vector/20240628/ourmid/pngtree-single-fried-chicken-wing-drumette-centered-vertically-on-a-pure-what-png-image_12783068.png" },
  { id: 112, nameAr: "نص كبد وقوانص", nameEn: "Half kg Livers & Gizzards", category: "poultry", price: 60, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb1K3iwxcEFV1cXCpz72caiE4HQrliB3wJMRrxKecghg&s=10" },

  // ===== fresh =====
  { id: 113, nameAr: "كيس جزر + كرنب مبشور", nameEn: "Shredded Carrot + Cabbage Bag", category: "fresh", price: 25 },
  { id: 114, nameAr: "طبق رقائق كانيلوني (8 رقائق)", nameEn: "Cannelloni Sheets Tray (8 sheets)", category: "fresh", price: 70 },
  { id: 115, nameAr: "عرض توابل وجبة 7 علب", nameEn: "Offer 7-Jar Meal Spices", category: "fresh", price: 75 },
  { id: 116, nameAr: "كيس شوربة مواسير", nameEn: "Soup Bones Bag", category: "fresh", price: 25 },
  { id: 117, nameAr: "باكت سحلب", nameEn: "Sahlab Pack", category: "fresh", price: 60 },
  { id: 118, nameAr: "برطمان هوت شوكلت", nameEn: "Hot Chocolate Jar", category: "fresh", price: 100 },

  // ===== offers =====
  { id: 119, nameAr: "عرض 6 ميني شاورما لحم", nameEn: "Offer 6 Mini Beef Shawarma", category: "offers", price: 210, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ63wulJPWtWE99LY3wtf8jXTLlkfd93ruqBD2DMNRFEA&s=10" },
  { id: 120, nameAr: "عرض 6 ميني شاورما فراخ", nameEn: "Offer 6 Mini Chicken Shawarma", category: "offers", price: 160, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkG5EfGFK0eWr1chyE-OIcSiSPFatUwg1yR7L9CHBXpw&s=10" },
  { id: 121, nameAr: "بوكس 10 شاورما ميكس", nameEn: "Box 10 Mix Shawarma", category: "offers", price: 300, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK1ylZOQv0FYj9-Dks-dBajEi1jb8U1Og8j4m9azT_dA&s=10" },
  { id: 122, nameAr: "بوكس ميكس 9 قطع", nameEn: "Mix Box 9 Pieces", category: "offers", price: 255, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK1ylZOQv0FYj9-Dks-dBajEi1jb8U1Og8j4m9azT_dA&s=10" },
  { id: 123, nameAr: "عرض 6 نص حواوشي لحم", nameEn: "Offer 6 Half Beef Hawawshi", category: "offers", price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgzkcFOeddxKAusW95E2ftKvJtowfEYNQ79cxIgmLEvw&s=10" }
];
const categories = [
  { id: "all", ar: "الكل", en: "All" },
  { id: "heat", ar: "جاهز على التسخين 🔥", en: "Ready to Heat" },
  { id: "offers", ar: "العروض المميزة 🎁", en: "Special Offers" },
  { id: "processed", ar: "المصنعات البيتي 🥩", en: "Processed Meats" },
  { id: "stuffed", ar: "محاشي فريش 🥬", en: "Fresh Stuffed Veggies" },
  { id: "quail", ar: "عروض السمان 🍗", en: "Quail Offers" },
  { id: "poultry", ar: "الدواجن والتتبيلة 🐔", en: "Poultry & Marinades" },
  { id: "brazilian", ar: "لحوم برازيلي سوبر 🍖", en: "Super Beef" },
  { id: "baladi", ar: "سمط وجبة كاملة البلدي 🥘", en: "Baladi Platters" },
  { id: "legumes", ar: "بقوليات مسلوقة 🫘", en: "Boiled Legumes" },
  { id: "sambousek", ar: "أطباق سمبوسك 🥟", en: "Sambousek Trays" },
  { id: "frozen", ar: "خضار مجمد 🥦", en: "Frozen Veggies" },
  { id: "fresh", ar: "خضار ومنتجات فريش 🥕", en: "Fresh Products" },
  { id: "dairy", ar: "سمنة وزبدة وعيش 🧈", en: "Ghee, Butter & Bread" },
  { id: "sweets", ar: "الحلويات والطعم البيتي 🍯", en: "Sweets & Jams" }
];

// صورة بديلة حسب القسم (بتظهر لو الصنف ملوش صورة أو الصورة ما اتحملتش)
const CAT_EMOJI = {
  heat: '🍲', offers: '🎁', processed: '🥩', stuffed: '🥬', quail: '🍗', poultry: '🐔',
  brazilian: '🍖', baladi: '🥘', legumes: '🫘', sambousek: '🥟', frozen: '🥦',
  fresh: '🥕', dairy: '🧈', sweets: '🍯'
};
function fallbackImg(cat) {
  const emoji = CAT_EMOJI[cat] || '🍽️';
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 170"><rect width="300" height="170" fill="#1f2a3a"/><text x="150" y="105" font-size="64" text-anchor="middle">' + emoji + '</text></svg>'
  );
}

const translations = {
  ar: {
    brand_title: "كيتشورا",
    brand_subtitle: "جاهز على التسخين ودليفري 24 ساعة",
    cart: "السلة",
    hero_tag: "✨ تجربة طعام فريدة ومريحة",
    hero_title: "أكلك جاهز على التسخين وبأعلى جودة",
    hero_desc: "نوفر لك أشهى الوجبات والمصنعات واللحوم والخضراوات المجهزة للتسخين والطهي الفوري، وتوصيل سريع على مدار 24 ساعة!",
    delivery_24: "توصيل 24 ساعة",
    ready_heat: "جاهز على التسخين",
    premium_quality: "جودة إكسترا Premium",
    search_placeholder: "ابحث عن وجبة، لحوم، حلويات...",
    all_items: "جميع المنتجات",
    currency: "ج.م",
    shopping_cart: "سلة الطلبات",
    total: "الإجمالي:",
    name_placeholder: "الاسم بالكامل",
    address_placeholder: "العنوان التفصيلي للتوصيل",
    notes_placeholder: "أي ملاحظات إضافية على الطلب...",
    send_order_whatsapp: "إرسال الطلب عبر الواتساب",
    footer_tagline: "خدمة توصيل سريعة 24/7 - أكل بيتي ومصنعات بلمسة احترافية.",
    empty_cart: "السلة فارغة حالياً!",
    items_count: "صنف",
    no_results: "لا توجد نتائج مطابقة للبحث",
    added: "تمت الإضافة للسلة",
    need_items: "السلة فارغة، أضف منتجاً أولاً",
    need_info: "برجاء كتابة الاسم والعنوان للتوصيل"
  },
  en: {
    brand_title: "Kitchora",
    brand_subtitle: "Ready to Heat & 24/7 Delivery",
    cart: "Cart",
    hero_tag: "✨ Unique & Convenient Dining Experience",
    hero_title: "Delicious Meals Ready to Heat & Cook",
    hero_desc: "We offer top-quality meals, meats, frozen veggies, and sweets prepared for instant heating with fast 24/7 delivery!",
    delivery_24: "24/7 Delivery",
    ready_heat: "Ready to Heat",
    premium_quality: "Premium Quality",
    search_placeholder: "Search for meals, meat, sweets...",
    all_items: "All Products",
    currency: "EGP",
    shopping_cart: "Shopping Cart",
    total: "Total:",
    name_placeholder: "Full Name",
    address_placeholder: "Detailed Delivery Address",
    notes_placeholder: "Any extra order notes...",
    send_order_whatsapp: "Send Order via WhatsApp",
    footer_tagline: "Fast 24/7 delivery service - Homemade taste with premium touch.",
    empty_cart: "Your cart is empty!",
    items_count: "items",
    no_results: "No matching results",
    added: "Added to cart",
    need_items: "Your cart is empty. Add an item first",
    need_info: "Please fill in your name and address"
  }
};

// ===== State Variables =====
let currentLang = 'ar';
let activeCategory = 'all';
let searchQuery = '';
let cart = [];

const WHATSAPP_NUMBER = '201020002397';

// ===== DOM Elements =====
const navbar = document.querySelector('.navbar');
const langToggleBtn = document.getElementById('langToggleBtn');
const langText = document.getElementById('langText');
const categoriesContainer = document.getElementById('categoriesContainer');
const menuGrid = document.getElementById('menuGrid');
const searchInput = document.getElementById('searchInput');
const currentCategoryTitle = document.getElementById('currentCategoryTitle');
const itemCountLabel = document.getElementById('itemCountLabel');

const cartBtn = document.getElementById('cartBtn');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartCount = document.getElementById('cartCount');
const cartTotalAmount = document.getElementById('cartTotalAmount');
const sendWhatsappBtn = document.getElementById('sendWhatsappBtn');
const customerName = document.getElementById('customerName');
const customerAddress = document.getElementById('customerAddress');
const orderNotes = document.getElementById('orderNotes');
const toast = document.getElementById('toast');

// ===== Helpers =====
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// تطبيع النص العربي عشان البحث يلاقي "اسكالوب" و"إسكالوب" و"فراخ/فراخه" بنفس الطريقة
function normalize(str) {
  return String(str)
    .toLowerCase()
    .replace(/[\u064B-\u065F\u0670]/g, '')
    .replace(/[أإآ]/g, 'ا')
    .replace(/ى/g, 'ي')
    .replace(/ة/g, 'ه')
    .trim();
}

// نجهز نص البحث مرة واحدة (عربي + إنجليزي)
menuData.forEach(item => {
  item._search = normalize(`${item.nameAr} ${item.nameEn}`);
});

// الـ navbar ممكن يتغير ارتفاعه على الموبايل، فنحدّث موضع شريط البحث الثابت تلقائياً
function syncNavHeight() {
  document.documentElement.style.setProperty('--nav-h', `${navbar.offsetHeight}px`);
}

let toastTimer;
function showToast(message, type = 'ok') {
  toast.textContent = message;
  toast.className = `toast show ${type === 'error' ? 'error' : ''}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 1800);
}

// ===== Initialize App =====
function init() {
  syncNavHeight();
  if ('ResizeObserver' in window) {
    new ResizeObserver(syncNavHeight).observe(navbar);
  } else {
    window.addEventListener('resize', syncNavHeight);
  }

  renderCategories();
  updateCategoryTitle();
  renderMenu(true);
  updateCartUI();
  setupEventListeners();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ===== Render Category Filter Buttons =====
function renderCategories() {
  categoriesContainer.innerHTML = categories.map(cat => `
    <button class="cat-btn ${cat.id === activeCategory ? 'active' : ''}" data-id="${cat.id}">
      ${currentLang === 'ar' ? cat.ar : cat.en}
    </button>
  `).join('');
}

function updateCategoryTitle() {
  if (activeCategory === 'all') {
    currentCategoryTitle.textContent = translations[currentLang].all_items;
  } else {
    currentCategoryTitle.textContent = getCategoryName(activeCategory);
  }
}

function getCategoryName(catId) {
  const c = categories.find(cat => cat.id === catId);
  return c ? (currentLang === 'ar' ? c.ar : c.en) : '';
}

// ===== Render Menu Cards =====
// animate = true بس عند أول تحميل أو تغيير القسم أو اللغة، مش مع كل حرف في البحث
function renderMenu(animate = false) {
  const q = normalize(searchQuery);
  const filtered = menuData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesCategory && (!q || item._search.includes(q));
  });

  const t = translations[currentLang];
  itemCountLabel.textContent = `${filtered.length} ${t.items_count}`;
  menuGrid.classList.toggle('is-animated', animate);

  if (filtered.length === 0) {
    menuGrid.innerHTML = `<div class="no-results">${t.no_results}</div>`;
    return;
  }

  menuGrid.innerHTML = filtered.map((item, i) => {
    const name = currentLang === 'ar' ? item.nameAr : item.nameEn;
    return `
    <div class="menu-card" id="card-${item.id}" style="--i:${Math.min(i, 12)}">
      <div class="card-img-wrapper">
        <img src="${item.image || fallbackImg(item.category)}" data-cat="${item.category}" alt="${name}" class="card-img" id="img-${item.id}" width="300" height="170"
             loading="${i < 4 ? 'eager' : 'lazy'}" decoding="async" referrerpolicy="no-referrer">
        <span class="card-badge">Premium</span>
      </div>
      <div class="card-body">
        <h4 class="card-title">${name}</h4>
        <span class="card-category">${getCategoryName(item.category)}</span>
        <div class="card-footer">
          <span class="card-price">${item.price} ${t.currency}</span>
          <button class="add-to-cart-btn" data-id="${item.id}" aria-label="${currentLang === 'ar' ? 'أضف للسلة' : 'Add to cart'}">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ===== Cart Logic =====
function addToCart(id, fromEl) {
  const item = menuData.find(i => i.id === id);
  if (!item) return;

  const existing = cart.find(c => c.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }

  flyToCart(id, fromEl);
  updateCartUI();
}

function bumpCart() {
  cartBtn.classList.remove('cart-bump');
  void cartBtn.offsetWidth; // إعادة تشغيل الأنيميشن لو الضغط متكرر
  cartBtn.classList.add('cart-bump');
}

// أنيميشن الطيران للسلة: بيستخدم transform بس (أسرع بكتير من تحريك left/top)
function flyToCart(id, fromEl) {
  const imgElement = document.getElementById(`img-${id}`);

  if (reducedMotion() || !imgElement || !fromEl || !fromEl.animate) {
    bumpCart();
    if (reducedMotion()) showToast(translations[currentLang].added);
    return;
  }

  const size = 56;
  const from = fromEl.getBoundingClientRect();
  const to = cartBtn.getBoundingClientRect();
  const startX = from.left + from.width / 2;
  const startY = from.top + from.height / 2;
  const dx = (to.left + to.width / 2) - startX;
  const dy = (to.top + to.height / 2) - startY;

  const flyer = document.createElement('img');
  flyer.src = imgElement.currentSrc || imgElement.src;
  flyer.className = 'flying-img';
  flyer.alt = '';
  flyer.referrerPolicy = 'no-referrer';
  flyer.style.left = `${startX - size / 2}px`;
  flyer.style.top = `${startY - size / 2}px`;
  document.body.appendChild(flyer);

  const anim = flyer.animate([
    { transform: 'translate(0, 0) scale(1)', opacity: 1 },
    { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - 36}px) scale(0.75)`, opacity: 1, offset: 0.5 },
    { transform: `translate(${dx}px, ${dy}px) scale(0.2)`, opacity: 0.4 }
  ], { duration: 520, easing: 'cubic-bezier(0.4, 0, 0.2, 1)' });

  anim.onfinish = () => {
    flyer.remove();
    bumpCart();
  };
}

function updateCartQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id);
    return;
  }
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const t = translations[currentLang];
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const prevCount = Number(cartCount.textContent) || 0;
  cartCount.textContent = totalCount;
  if (totalCount !== prevCount) {
    cartCount.classList.remove('pop');
    void cartCount.offsetWidth;
    cartCount.classList.add('pop');
  }
  cartTotalAmount.textContent = `${totalPrice} ${t.currency}`;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<div class="empty-cart-msg">${t.empty_cart}</div>`;
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="item-info">
        <h5>${currentLang === 'ar' ? item.nameAr : item.nameEn}</h5>
        <span class="item-price">${item.price * item.qty} ${t.currency}</span>
      </div>
      <div class="item-controls">
        <button class="qty-btn" data-action="dec" data-id="${item.id}" aria-label="-">-</button>
        <span>${item.qty}</span>
        <button class="qty-btn" data-action="inc" data-id="${item.id}" aria-label="+">+</button>
      </div>
      <button class="remove-item-btn" data-action="remove" data-id="${item.id}" aria-label="${currentLang === 'ar' ? 'إزالة الصنف' : 'Remove item'}">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `).join('');
}

// ===== Cart Drawer =====
function openCart() {
  cartDrawer.classList.add('active');
  cartOverlay.classList.add('active');
  cartDrawer.setAttribute('aria-hidden', 'false');
  document.body.classList.add('no-scroll');
}

function closeCart() {
  cartDrawer.classList.remove('active');
  cartOverlay.classList.remove('active');
  cartDrawer.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('no-scroll');
}

// ===== Language =====
function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-en', currentLang === 'en');
  langText.textContent = currentLang === 'ar' ? 'English' : 'عربي';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const text = translations[currentLang][el.getAttribute('data-i18n')];
    if (text) el.textContent = text;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const text = translations[currentLang][el.getAttribute('data-i18n-placeholder')];
    if (text) el.placeholder = text;
  });

  renderCategories();
  updateCategoryTitle();
  renderMenu(false);
  updateCartUI();
  syncNavHeight();
}

// ===== Event Listeners =====
function setupEventListeners() {
  // Search (مع debounce عشان ما يعيدش رسم الكروت مع كل حرف)
  let searchTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimer);
    const value = e.target.value;
    searchTimer = setTimeout(() => {
      searchQuery = value;
      renderMenu(false);
    }, 150);
  });

  // Categories (event delegation)
  categoriesContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('.cat-btn');
    if (!btn) return;
    activeCategory = btn.dataset.id;
    categoriesContainer.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b === btn));
    btn.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', inline: 'center', block: 'nearest' });
    updateCategoryTitle();
    renderMenu(true);
  });

  // Add to cart (event delegation)
  menuGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-to-cart-btn');
    if (!btn) return;
    addToCart(Number(btn.dataset.id), btn);
  });

  // لو صورة منتج ما اتحملتش نحط صورة بديلة بدل الأيقونة المكسورة
  menuGrid.addEventListener('error', (e) => {
    const img = e.target;
    if (img.tagName === 'IMG' && !img.dataset.fallback) {
      img.dataset.fallback = '1';
      img.src = fallbackImg(img.dataset.cat);
    }
  }, true);

  // Cart items controls (event delegation)
  cartItemsContainer.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    if (btn.dataset.action === 'inc') updateCartQty(id, 1);
    if (btn.dataset.action === 'dec') updateCartQty(id, -1);
    if (btn.dataset.action === 'remove') removeFromCart(id);
  });

  // Toggle Language
  langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    applyLanguage();
  });

  // Cart Drawer Events
  cartBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeCart();
  });

  // شيل علامة الخطأ أول ما المستخدم يكتب
  [customerName, customerAddress].forEach(input => {
    input.addEventListener('input', () => input.classList.remove('invalid'));
  });

  // Send Order via WhatsApp
  sendWhatsappBtn.addEventListener('click', () => {
    const t = translations[currentLang];

    if (cart.length === 0) {
      showToast(t.need_items, 'error');
      return;
    }

    let firstInvalid = null;
    [customerName, customerAddress].forEach(input => {
      const empty = !input.value.trim();
      input.classList.remove('invalid');
      if (empty) {
        void input.offsetWidth;
        input.classList.add('invalid');
        if (!firstInvalid) firstInvalid = input;
      }
    });

    if (firstInvalid) {
      showToast(t.need_info, 'error');
      firstInvalid.focus();
      return;
    }

    const name = customerName.value.trim();
    const address = customerAddress.value.trim();
    const notes = orderNotes.value.trim();

    let orderText = `*طلب جديد من موقع كيتشورا 🍽️*\n\n`;
    orderText += `👤 *الاسم:* ${name}\n`;
    orderText += `📍 *العنوان:* ${address}\n`;
    if (notes) orderText += `📝 *ملاحظات:* ${notes}\n`;
    orderText += `--------------------------------\n`;
    orderText += `*الطلبات:*\n`;

    let total = 0;
    cart.forEach(item => {
      const itemTotal = item.price * item.qty;
      total += itemTotal;
      orderText += `▪️ ${item.nameAr} (x${item.qty}) - ${itemTotal} ج.م\n`;
    });

    orderText += `--------------------------------\n`;
    orderText += `💰 *الإجمالي النهائي:* ${total} ج.م\n`;
    orderText += `🚚 *الخدمة:* توصيل دليفري 24 ساعة`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(orderText)}`;
    window.open(whatsappUrl, '_blank');
  });
}
