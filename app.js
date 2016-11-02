function pageScroll(obj) {
		position = $("#block"+obj).offset().top;
        var yPos = window.pageYOffset;
        yPos += 95;
        if(yPos>position)
        {
            yPos = position;
        }
        window.scroll(0,yPos); // horizontal and vertical scroll increments
        scrolldelay = setTimeout('pageScroll(\''+obj+'\')',40); // scrolls every 100 milliseconds
        if(yPos==position)
        {
            yPos = 0;
            clearTimeout(scrolldelay);
        }
    }
function pageScrollUp(obj) {
		position = $("#block"+obj).offset().top;
        var yPos = window.pageYOffset;
        yPos -= 95;
        if(yPos<position)
        {
            yPos = position;
        }
        window.scroll(0,yPos); // horizontal and vertical scroll increments
        scrolldelay = setTimeout('pageScrollUp(\''+position+'\')',40); // scrolls every 100 milliseconds
        if(yPos==position)
        {
            clearTimeout(scrolldelay);
        }
    }
	