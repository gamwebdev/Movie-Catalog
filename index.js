(function(){
		
				var input = document.getElementById("input");
				var btn   = document.getElementById("btn");
				var edit   = document.getElementById("edit");

				var lists = {
					todo : document.getElementById("todo"),
					done : document.getElementById("done")	
				};	

				

				var makeTaskHtml 		= function(str, onCheck){
					var el 		 		= document.createElement("li");
					var checkbox 		= document.createElement("input");
					var editCheckBox 	= document.createElement("input"); 
					var label 			= document.createElement("span");

					checkbox.type 	   = "checkbox";
					editCheckBox.type  = "checkbox";

					checkbox.addEventListener("click", onCheck, false);
					editCheckBox.addEventListener("click", onEdit, false);

					label.textContent  = str;		
 					
					el.appendChild(checkbox);
					el.appendChild(editCheckBox);	
					el.appendChild(label);
					return el;	
				};

				var onCheck = function(event){
					var task = event.target.parentNode; // gives li element
														//lists.done.appendChild(a);
					task.innerHTML = "";
					this.checked = false;

				};


				var onEdit = function(event){

					input.value = event.target.parentNode.children[2].innerHTML;
					event.target.nextSibling.innerHTML = "editing ... ";
					input.focus();
					
					edit.addEventListener("click", function(){
						event.target.nextSibling.innerHTML = input.value;
					}, false);
					this.checked = false;

				}

				var addTask = function(task){
					lists.todo.appendChild(task);
				};

				//addTask(lists.todo, makeTaskHtml(" To-Do-Task ", onCheck));
				//addTask(lists.done, makeTaskHtml(" Done-Task ", onCheck));

				var onInput    = function(event){
					var str    = input.value.trim();
					if (str.length > 0) {
						addTask(makeTaskHtml(str, onCheck));
						input.value = '';
						input.focus();	
					}
	
				};

				btn.addEventListener('click', onInput, false);
				
				input.addEventListener('keyup', function(event){
					var code = event.keyCode;
					if ( code === 13 ) {
						onInput();
					}
				});
				
				


				//lists.todo.appendChild(" This ones work without declaration .....");

}());