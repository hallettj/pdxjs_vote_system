$(document).ready(function(){
	$.get('js/polls.json',function(data){
		$.each(data,function(i,poll){
			var el = $('<div/>',{'id':'poll_'+poll.id});
			$(el).append('<h2>'+poll.title+'</h2>');
			$(el).append('<ul/>',{'class':'items'});
			var ul = $(el).find('ul');
			$.each(poll.options,function(i,opt){
				console.log(ul);
				$(ul).append('<li id="opt_'+opt.id+'">'+opt.title+'</li>');
			});
			$(el).append('<a class="submit_vote">Vote</a>');
			console.log(el);
			
			$(ul).sortable({
				start:function(){
					console.log(this);
					$('li',this).css('list-style-type','none');
				},
				stop:function(){
					$('li',this).css('list-style-type','decimal');
				}
			});
			
			$($(el).find('a')).click(function(e){
				e.preventDefault();
				var list = $(this).parent().find('ul');
				if(!list) return false;
				var result = [];
				$('li',list).each(function(i,el){
					result[i] = $(el).attr('id');
				});
				alert(result);
			});
			$('body').append(el);
		});
	});
});