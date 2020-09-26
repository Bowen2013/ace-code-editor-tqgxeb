import { Component, ViewChild, AfterViewInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  name = "Angular 6";
  correct = false;
  @ViewChild("editor") editor;

  ngAfterViewInit() {
    this.editor.getEditor().setOptions({
      showLineNumbers: true,
      tabSize: 2
    });

    this.editor.mode = "javascript";
    this.editor.value = `// finish the add function
function add(a,b) {
  // finish the code here
}
    `;

    this.editor.getEditor().commands.addCommand({
      name: "showOtherCompletions",
      bindKey: "Ctrl-.",
      exec: function(editor) {}
    });
  }

  getValue() {
    this.correct = false;
    const codeSnippet = this.editor.value + "\n add(1,2);";
    console.log(codeSnippet);
    const rst1 = eval(codeSnippet);
    if (rst1 === 3) {
      this.correct = true;
    } else {
      alert("you are shit");
    }
  }
}
