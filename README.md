# Node.js Homework 01

Bu proje, Node.js eğitiminde verilen **1. ödev** kapsamında hazırlanmıştır.  
Amaç, basit komut dosyaları (scripts) aracılığıyla kişi verilerini yönetmektir.

---

## 📦 Kurulum

Projeyi klonladıktan sonra gerekli bağımlılıkları yüklemek için:

```bash
npm install
```

---

## 🚀 Kullanım

`package.json` içinde tanımlı script’leri aşağıdaki komutlarla çalıştırabilirsiniz:

```bash
npm run get-all
```

👉 Tüm kişileri listeler.

```bash
npm run generate
```

👉 Yeni kişi verileri oluşturur (örnek data üretir).

```bash
npm run add-one
```

👉 Yeni bir kişi ekler.

```bash
npm run count
```

👉 Kişi sayısını gösterir.

```bash
npm run remove-last
```

👉 Son eklenen kişiyi siler.

```bash
npm run remove-all
```

👉 Tüm kişileri siler.

---

## 📂 Proje Yapısı

```
nodejs-hw-01/
├── package.json
├── src/
│   └── scripts/
│       ├── getAllContacts.js
│       ├── generateContacts.js
│       ├── addOneContact.js
│       ├── countContacts.js
│       ├── removeLastContact.js
│       └── removeAllContacts.js
```

---

## ✅ Notlar

- Kod, **Node.js** üzerinde çalışır.
- Script’ler çalıştırıldığında hata vermemelidir.
- Ödev kriterlerine uygun olarak repo adı `nodejs-hw-01` olarak oluşturulmuştur.
