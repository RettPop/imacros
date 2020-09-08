function fnd(elemId, doc)
{
    var elem = doc.getElementById(elemId);
    {
        var elms = document.querySelectorAll("[id='"+elemId+"']");

        for(var i = 0; i < elms.length; i++) {
            console.log(elms[i]); // <-- whatever you need to do here.
        }
    }
    if(null == elem)
    {
        var iframes = doc.getElementsByTagName("iframe");
        console.log("document has" + iframes.length + " iframes");
        if(iframes.length > 0)
        {
            for (const idx in iframes) 
            {
                const oneFrame = iframes[idx];
                console.log("looking in frame " + oneFrame.elemId);
                if(null != oneFrame.contentWindow) {
                    elem = fnd(elemId, oneFrame.contentWindow.document);
                }
                if(null != elem){
                    console.log("Found element; " + elem);
                    break;
                    // elem = null;
                }
            }
        }
    }

    return elem;
}

function sc()
{
    var day= new Date().getDay();
    var base = 7.50; 
    var randomNumber=Math.floor(Math.random()*5); 
    var values=[0, 25, 50, 75, 100]
    var result = base+values[randomNumber]/100; 
    result.toString().replace(".", ",");
    var todaysCell = fnd("aaaaKEBH.VcCatTableWeek.WORKDATE" + day + "_InputField.0", document);
    if(null != todaysCell)
    {
        // todaysCell.onClick()
        // todaysCell.value = result;
        // todaysCell.text = result;
        // todaysCell
    }
    else
    {
        alert("No cell found");
    }

    return todaysCell;
}

sc();
