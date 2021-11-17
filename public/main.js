/*
Editing content !
on the var we have data retrieved from the editor
var contentForEdit = "<h2>existing content </h2><p>yeppp</p>"
putting the data into the editor to edit it !
document.querySelector('#editor').innerHTML = contentForEdit;
*/

//Params for the toolbar
var toolbarOptions = [
  ['bold', 'italic', 'underline'],        // toggled buttons
  ['blockquote', 'image'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

  [{ 'size': [false, 'large'] }],  // custom dropdown
  [{ 'header': [1, 2, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

//Params for the editor
let editorParams = {
	modules: {
		toolbar: toolbarOptions
	},
	placeholder: 'Écrivez votre meilleur article !',
	theme: 'snow'
}

//Text editor init
var quill = new Quill('#editor', editorParams);

//On click on submit button
document.querySelector('#send').addEventListener('click', () => {
  //DATA
  let editor = document.querySelector('#editor');
  let data = editor.querySelector(".ql-editor").innerHTML
  console.log(data);
  document.querySelector('#app').innerHTML = data;
});
