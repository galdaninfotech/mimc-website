var $j = jQuery.noConflict();

$j(document).ready(function($){
	initQodeLike();
});

function initQodeLike(){
	$j(document).on('click','.qode-like', function() {
		
		var $likeLink = $j(this);
		var $id = $j(this).attr('id');
		
		if($likeLink.hasClass('liked')) return false;

		var $dataToPass = {
			action: 'subway_core_like',
			likes_id: $id 
		}
		
		var like = $j.post(qodeLike.ajaxurl, $dataToPass, function(data){
			$likeLink.html(data).addClass('liked').attr('title','You already like this!');
			$likeLink.find('span').css('opacity',1);
		});
	
		return false;
	});
}