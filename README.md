# אתר מכון חכמת הרגע

אתר סטטי (HTML/CSS/JS ללא build step) לדף הבית של מכון חכמת הרגע, בהובלת עטרה גבריאלי.

## מבנה הריפו

- `docs/`, האתר עצמו, זו התיקייה שמתפרסמת ל-GitHub Pages.
  - `docs/index.html`, עמוד הבית הראשי.
  - `docs/tipul-todaati.html`, דף נחיתה להכשרה לטיפול תודעתי.
  - `docs/assets/`, גופנים, תמונות מכווצות ל-web, CSS/JS משותפים.
- `materials/`, חומרי המקור המקוריים (קובץ הספר, הלוגו והתצלומים באיכות מלאה). **התיקייה הזו לא מתפרסמת באתר**, היא מחוץ ל-`docs/`, כך שכשמפעילים Pages על `docs/` היא נשארת רק בגיט, לא בדפדפן.

## איך להריץ מקומית

אין צורך בכלים מיוחדים, אפשר פשוט לפתוח את `docs/index.html` בדפדפן, או להריץ שרת קטן מהתיקייה `docs`:

```bash
cd docs
python3 -m http.server 8000
```

ואז לפתוח `http://localhost:8000`.

## איך לחבר ל-GitHub Pages

1. ליצור ריפו ריק וחדש ב-GitHub (בלי README/gitignore, כדי לא להתנגש עם מה שיש כבר כאן).
2. מתוך תיקיית הפרויקט (כאן):

   ```bash
   git remote add origin <ה-URL של הריפו שיצרת>
   git branch -M main
   git push -u origin main
   ```

3. ב-GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, ולבחור **Branch: `main` / Folder: `/docs`**, ולשמור.
4. אחרי דקה שתיים האתר יהיה זמין בכתובת שמופיעה שם (בדרך כלל `https://<username>.github.io/<repo-name>/`).

## עריכת תוכן

בקובץ `docs/index.html` יש הערת HTML `<!-- תוכן לדוגמה... -->` ליד קטע התוכניות/סדנאות, שם כדאי לעדכן תאריכים, מחירים וקישורי הרשמה אמיתיים לפני פרסום. כתובת יצירת הקשר בפוטר מוגדרת כרגע ל-`atara30@gmail.com`.
