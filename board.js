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
                        var img = td.appendChild(document.createElement('img'))
                        img.src='WhiteSq.png';
                        
                        //using the class for this assignment
                        tdclass = "white";
                        
                        tr.appendChild(td)
                        BLACKorWHITE = 1;
                    }
                    else
                    {
                        var td=document.createElement('td');
                        var img = td.appendChild(document.createElement('img'))
                        if (i <= 2) {
                            img.src='BlackSq_WtPc.png';
                            
                            //using the class for this assignment
                            tdclass = "black";
                        }
                        else if (i >= 5) {
                            img.src='BlackSq_RdPc.png';
                            
                            //using the class for this assignment
                            tdclass = "black";
                        }
                        else
                        {
                            img.src='BlackSq.png';
                            
                            //using the class for this assignment
                            tdclass = "black";
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
                        var img = td.appendChild(document.createElement('img'))
                        if (i <= 2) {
                            img.src='BlackSq_WtPc.png';
                            
                            //using the class for this assignment
                            tdclass = "black";
                        }
                        else if (i >= 5) {
                            img.src='BlackSq_RdPc.png';
                            
                            //using the class for this assignment
                            tdclass = "black";
                        }
                        else
                        {
                            img.src='BlackSq.png';
                            
                            //using the class for this assignment
                            tdclass = "black";
                        }
                        tr.appendChild(td)
                        BLACKorWHITE = 1;
                    }
                    else
                    {
                        var td=document.createElement('td');
                        var img = td.appendChild(document.createElement('img'))
                        img.src='WhiteSq.png';
                        
                        
                        //using the class for this assignment
                        tdclass = "white";
                        
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