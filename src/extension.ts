'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as ncp from 'copy-paste';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    let disposable1 = vscode.commands.registerCommand('extension.copyAsList', () => {
        const editor = vscode.window.activeTextEditor;

        if (editor !== undefined) {
            let text = '';

            for (const selection of editor.selections) {
                if (text !== '') {
                    text += ', ';
                }
                text += editor.document.getText(selection);
            }

            // console.log(text);
            ncp.copy(text);
        }
    });

    let disposable2 = vscode.commands.registerCommand('extension.copyAsListOfStrings', () => {
        const editor = vscode.window.activeTextEditor;

        if (editor !== undefined) {
            let text = '';

            for (const selection of editor.selections) {
                if (text !== '') {
                    text += ', ';
                }
                text += '\'' + editor.document.getText(selection).replace(/'/g, '\\\'') + '\'';
            }

            // console.log(text);
            ncp.copy(text);
        }
    });

    context.subscriptions.push(disposable1);
    context.subscriptions.push(disposable2);
}

// this method is called when your extension is deactivated
export function deactivate() {
}