	var parentNode = document.getElementsByTagName('body')[0];

	class OnClickComponent extends InfernoComponent {
		constructor() {
			super();
			this.state = {
			    counter: 0,
			    playing:false
			};
		}
	    render() {
		var self=this;
			return {
			    tag: 'video',
			    className: 'videoPlayer',
			    	events: {
				    onclick:function(){
					self.state.playing=!self.state.playing;
					self.state.playing?this.play():this.pause();
					}
				    
				},
			    children: {
				tag: 'source',
				className: 'sourceTag',
				events: {
				    
				},
				    attrs:{
					src:'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4'}
				    
				}
					
			};
			    
		}
	}


	InfernoDOM.render({
		tag: 'div',
		children: [
			{
				tag: OnClickComponent
				
			},
			// {
			// 	tag: OnMouseMoveComponent,
			// 	className: 'container'
			// },
			// {
			// 	tag: OnMouseEnterComponent,
			// 	className: 'container'
			// },
			// {
			// 	tag: OnMouseOverComponent,
			// 	className: 'container'
			// }
		]
	}, parentNode);
