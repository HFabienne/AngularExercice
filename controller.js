
var appAdneomExo = angular.module("appAdneomExo", ['ui.bootstrap']);
  
appAdneomExo.controller("controller", function ($scope) {
    $scope.contenuPostTitre;
    $scope.contenuPostLien;
    $scope.visiblePost = false;
    
    $scope.auteurComment;
    $scope.contenuComment;
    $scope.visibleComment = false;
    $scope.tmpPost = null;
    
    $scope.test = 8;
    
    $scope.tableauMethode1 = [{}];
    $scope.tableauMethode2 = [{}];

	  //METHODE 1 : Ajout en dur, avec initialisation au niveau du ng-repeat
	 /* $scope.listerPost = function (){
		  var listePost = [{}];
		  var tabComment1 = {}; //"Tableau" de commentaires
		  var tabComment2 = {}; //"Tableau" de commentaires
		  var post1 = {
		          id: (listePost.length + 1),
				  title:"Post1",
				  link:"Lien1.html",
				  upvotes:0,
				  comments:tabComment1
		  }
		  var post2 = {
		          id: (listePost.length + 2),
				  title:"Post2",
				  link:"Lien2.html",
				  upvotes:2,
				  comments:tabComment2
		  }
		  listePost.push(post1, post2);
		  $scope.tableauMethode1 = listePost;
	  }*/

	  /** Constructeurs des objets utilisés dans l'application **/
        function Post(id, title, link, upvotePost, comments){
		  this.id = id;
		  this.title = title;
		  this.link = link;
		  this.upvotePost = 0; 
		  this.comments = comments;
	  }
	  function Comment(_id, author, body, upvoteComment, post){
		  this._id = _id;
		  this.author = author;
		  this.body = body;
		  this.upvoteComment = 0;
		  this.post = post;
	  }
	  
	  
	  /***** Partie POSTS *****/
	  
	  $scope.listerPost2 = function(){
        var listePost2 = [{}];
        var tabComment = [{}]; 
		//Création des "posts tests"
		for (var i = 0; i<4 ; i++){
		    var compteur = i;
		    compteur++;
	        var nbreVote = 0;
	        var nouveauPost = new Post(i, "Post "+compteur+" ","Lien "+compteur+"", nbreVote, tabComment);
	        listePost2.push(nouveauPost);
		}
		$scope.tableauMethode2 = listePost2;
    }
	  
	$scope.ajouterPost = function(titre, lien){
	    var nouvelId = 0;
	    var nbreVotes = 0;
	    if($scope.tableauMethode2.length == 0){
	        nouvelId = parseInt($scope.tableauMethode2.length + 1);
	    } else {
	        nouvelId = parseInt($scope.tableauMethode2.length);
	    }
	    var nouveauPost = new Post(nouvelId, titre, lien, nbreVotes, [{}]);
	    $scope.tableauMethode2.push(nouveauPost);
	    $scope.visiblePost = false;
	    
	}
	
	$scope.voterPost = function(post){
	    try{
	        post.upvotePost = post.upvotePost + 1;
	    } catch(e){
	        alert("Erreur dans le vote!!!");
	    }
	}
	
	$scope.rendreVisiblePost = function(){
	    if($scope.visiblePost == false){
	        $scope.visiblePost = true;
	    } else {
	        $scope.visiblePost = false;
	    }
	}
	
	$scope.verifPost = function(post){
	    //var visible = false;
	    if ( (parseInt(post.id)) == 0 || (parseInt(post.id)) == null ){
	        return false;
	    } else {
	        return true;
	    }
	}
	
	/***** Partie COMMENT *****/
	
	$scope.ajouterComment = function(auteur, contenuCommentaire, varPost){
	    var nouvelIdComment = 0;
	    var nbreVotesComment = 0;
	    var j = 8;
	    var refPost = parseInt(varPost.id);
	   if(post.comments.length === 0 || post.comments.length === null){
	        nouvelIdComment = post.comments.length + 1;
	    } else {
	        //nouvelIdComments = post.comments.length;
	        nouvelIdComments = j+1;
	    }
	    var nouveauCommentaire = new Comment(nouvelIdComment, auteur, contenuCommentaire, nbreVotesComment, refPost);
	    varPost.comments.push(nouveauCommentaire);
	    $scope.visibleComment = false;
	    
	}
	
	$scope.rendreVisibleComment = function(post){
	    $scope.tmpPost = post;
	    if($scope.visibleComment == false){
	        $scope.visibleComment = true;
	    } else {
	        $scope.visibleComment = false;
	    }
	}
	
	/*$scope.voterComment = function(comment){
	    try{
	        comment.nombreVotes = comment.nombreVotes + 1;
	    } catch(e){
	        alert("Erreur dans le vote!!!");
	    }
	}*/
	
	
	
    
});