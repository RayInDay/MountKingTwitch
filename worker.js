onmessage = function (e)
{

while(e.data.length < 1000)
		{
				if (e.data.length > 0) 
				{
					for(var i = 0; i< e.data.length; i++)
					{
						console.log(e.data[i].username)
					}
				} 
		}