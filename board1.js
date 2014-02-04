var BLACKorWHITE = 1;
    
    function tableCreate(TblHeight,TblWidth)
    {
        var body=document.getElementsByTagName('body')[0];
        var tbl=document.createElement('table');
        var tbdy=document.createElement('tbody');
        
        for(var i=0;i<TblHeight;i++)
        {
            var tr=document.createElement('tr');
            for(var j=0;j<TblWidth;j++)
            {
                if (i%2)
                {
                    if (BLACKorWHITE == 0)
                    {
                        var td=document.createElement('td');
                        td.id="white";
                        tr.appendChild(td)
                        BLACKorWHITE = 1;
                    }
                    else
                    {
                        var td=document.createElement('td');
                        if (i <= 2) {
                            td.id="black";
                        }
                        else if (i >= 5) {

                            td.id = "black";
                        }
                        else
                        {
                            td.id = "black";
                        }
                        tr.appendChild(td)
                        BLACKorWHITE = 0;
                    }
                }
                else
                {
                    if (BLACKorWHITE == 0)
                    {
                        var td=document.createElement('td');
                        if (i <= 2) {
                            td.id = "black";
                        }
                        else if (i >= 5) {
                            td.id = "black";
                        }
                        else
                        {
                            td.id = "black";
                        }
                        tr.appendChild(td)
                        BLACKorWHITE = 1;
                    }
                    else
                    {
                        var td=document.createElement('td');
                       td.id = "white";
                        tr.appendChild(td)
                        BLACKorWHITE = 0;
                    }       
                }        
            }
            tbdy.appendChild(tr);
        }
        tbl.appendChild(tbdy);
        body.appendChild(tbl)
    }
document.getElementById("testing").innerHTML= tableCreate(8,8);