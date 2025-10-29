const vscode = require('vscode');
const { exec } = require('child_process');

function activate(context) {
  let disposable = vscode.commands.registerCommand('alimTerminal.runPhone', function () {
    const terminal = vscode.window.createTerminal('Alim Terminal');
    terminal.show();
    terminal.sendText('echo "📱 Alim New Phone başlatılıyor..."');

    // Flutter projesi çalıştır
    terminal.sendText('cd flutter_project && flutter run');
    

    // HTML projesi için basit sunucu
    terminal.sendText('cd html_project && npx serve');

    vscode.window.showInformationMessage('Alim New Phone komutu çalıştırıldı!');
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
