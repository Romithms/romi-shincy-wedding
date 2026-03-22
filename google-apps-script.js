// ============================================================
// GOOGLE APPS SCRIPT — Wedding Wishes Guestbook Backend
// ============================================================
// 
// SETUP STEPS:
// 1. Go to https://sheets.google.com → Create a new spreadsheet
// 2. Name it "Romi & Shincy Wedding Wishes"
// 3. In Row 1, add these headers: Name | Message | Timestamp
// 4. Go to Extensions → Apps Script
// 5. Delete any existing code and paste this entire file
// 6. Click the floppy disk icon to save (name it "Wedding Wishes API")
// 7. Click Deploy → New Deployment
// 8. Click the gear icon → Select "Web app"
//    - Description: "Wedding Wishes API"
//    - Execute as: "Me"
//    - Who has access: "Anyone"
// 9. Click "Deploy"
// 10. Authorize when prompted (click through the "unsafe" warning — it's your own script)
// 11. Copy the Web App URL (looks like: https://script.google.com/macros/s/XXXX/exec)
// 12. Paste that URL into index.html replacing 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'
//
// DONE! The guestbook will now save wishes to your Google Sheet.
// ============================================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Validate input
    var name = (data.name || '').toString().substring(0, 60).trim();
    var message = (data.message || '').toString().substring(0, 500).trim();
    
    if (!name || !message) {
      return ContentService.createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Name and message are required'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Append the wish to the sheet
    var timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    sheet.appendRow([name, message, timestamp]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'ok',
      message: 'Wish saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: GET endpoint to fetch all wishes (for future use if you want to display them)
function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = sheet.getDataRange().getValues();
    
    // Skip header row, return last 50 wishes in reverse chronological order
    var wishes = [];
    for (var i = data.length - 1; i >= 1 && wishes.length < 50; i--) {
      wishes.push({
        name: data[i][0],
        message: data[i][1],
        timestamp: data[i][2]
      });
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'ok',
      wishes: wishes
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
