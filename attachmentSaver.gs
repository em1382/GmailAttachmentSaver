function attachmentSaver() {
  var threads = GmailApp.getInboxThreads(0, 5);
  var messages = GmailApp.getMessagesForThreads(threads);
  for (var i = 0; i < messages.length; i++) {
    for (var j = 0; j < messages[i].length; j++) {
      var attachments = messages[i][j].getAttachments();
      for (var k = 0; k < attachments.length; k++) {
        saveToDrive(attachments[k]);
      }
    }
  }
}

function saveToDrive(attachment) {
  var attachmentsFolder = DriveApp.getRootFolder().getFoldersByName("Attachments").next();
  attachmentsFolder.createFile(attachment);
}
