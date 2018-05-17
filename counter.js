var timer = document.getElementById("timer");
var i = 60;
var testPara = document.getElementById("testPara");
var textArea = document.getElementById("textArea");
var startWindow = document.getElementById("startWindow");
var startButton = document.getElementById("startButton");
var newTestWindow = document.getElementById("newTestWindow");
var newTestButton = document.getElementById("newTestButton");
var score = 0;





var calculateScore = function() {
        
	var x = textArea.value;
	var y = x.split(" ");
        var wordCount=y.length;
        var testWords = testPara.innerHTML.split(" ");
	console.log(testWords);
        return wordCount;
};


var genPass = function(){
	
	paraContainer.style.display = "inline-block";
	textArea.style.display = "inline-block";
        var passages = [passage1, passage2, passage3, passage4, passage5];
          
	testPara.innerHTML=passages[Math.floor(Math.random()*10/2)];

};

var displayTime = function () {

	var getTime = setInterval(function() {
		i--;
		timer.innerHTML = "Time Remaining: " + i + "s"; 

		console.log(i);

		if(i == 0){

			clearInterval(getTime);
			
			var wrapper = document.getElementById("wrapper");
			wrapper.remove();

			timer.remove();

			document.body.appendChild(newTestWindow);
			document.getElementById("finalScore").innerHTML = "Your speed: " + calculateScore() + " wpm";
			newTestWindow.style.display = "block";
		} 
	}, 1000);

	textArea.removeEventListener("keydown", displayTime);
};

var test = function() {
	
	startWindow.style.display = "none";

	timer.innerHTML = "Time Remaining: 60s";
	timer.style.display = "block";

	textArea.addEventListener("keydown", displayTime);

	genPass();

};

startButton.addEventListener("click", test);


newTestButton.addEventListener("click", function(){
	window.location.reload();
});

var passage1 = "Machine learning is an application of artificial intelligence that provides systems the ability to automatically learn and improve from experience without being explicitly programmed.<br><br> Machine learning focuses on the development of computer programs that can access data and use it learn for themselves.<br><br>The process of learning begins with observations or data, such as examples, direct experience, or instruction, in order to look for patterns in data and make better decisions in the future based on the examples that we provide.The primary aim is to allow the computers learn automatically without human intervention or assistance and adjust actions accordingly.Machine learning algorithms are often categorized as supervised or unsupervised";




var passage2 = "Supervised machine learning algorithms can apply what has been learned in the past to new data using labeled examples to predict future events.<br><br>Starting from the analysis of a known training dataset, the learning algorithm produces an inferred function to make predictions about the output values.The system is able to provide targets for any new input after sufficient training.<br><br>The learning algorithm can also compare its output with the correct, intended output and find errors in order to modify the model accordingly.In contrast, unsupervised machine learning algorithms are used when the information used to train is neither classified nor labeled.Unsupervised learning studies how systems can infer a function to describe a hidden structure from unlabeled data.<br><br>The system doesn't figure out the right output, but it explores the data and can draw inferences from datasets to describe hidden structures from unlabeled data.";





var passage3 = "Semi-supervised machine learning algorithms fall somewhere in between supervised and unsupervised learning, since they use both labeled and unlabeled data for training , typically a small amount of labeled data and a large amount of unlabeled data. The systems that use this method are able to considerably improve learning accuracy. Usually, semi-supervised learning is chosen when the acquired labeled data requires skilled and relevant resources in order to train it or learn from it. Otherwise, acquiringunlabeled data generally doesn't require additional resources.Reinforcement machine learning algorithms is a learning method that interacts with its environment by producing actions and discovers errors or rewards.Trial and error search and delayed reward are the most relevant characteristics of reinforcement learning.This method allows machines and software agents to automatically determine the ideal behavior within a specific context in order to maximize its performance.<br><br>Simple reward feedback is required for the agent to learn which action is best; this is known as the reinforcement signal.";





var passage4 = "Machine learning and data mining often employ the same methods and overlap significantly, but while machine learning focuses on prediction, based on known properties learned from the training data, data mining focuses on the discovery of  unknown properties in the data.<br><br>Data mining uses many machine learning methods, but with different goals; on the other hand, machine learning also employs data mining methods as unsupervised learning or as a preprocessing step to improve learner accuracy.Much of the confusion between these two research communities comes from the basic assumptions they work with: in machine learning, performance is usually evaluated with respect to the ability to reproduce known knowledge, while in knowledge discovery and data mining the key task is the discovery of previously unknown knowledge.Evaluated with respect to known knowledge, an uninformed method will easily be outperformed by other supervised methods, while in a typical task, supervised methods cannot be used due to the unavailability of training data.";





var passage5 = " Datum is represented as a linear combination of basis functions, and the coefficients are assumed to be sparse.Let x be a d-dimensional datum, D be a d by n matrix, where each column of D represents a basis function.r is the coefficient to represent x using D. Mathematically, sparse dictionary learning means solving  where r is sparse.Generally speaking, n is assumed to be larger than d to allow the freedom for a sparse representation.Learning a dictionary along with sparse representations is strongly NP-hard and also difficult to solve approximately.A popular heuristic method for sparse dictionary learning is K-SVD.Sparse dictionary learning has been applied in several contexts.In classification, the problem is to determine which classes a previously unseen datum belongs to."; 








