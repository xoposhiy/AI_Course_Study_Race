let originalLog = [200,[[50,-40],[100,0],[0,0]],[[50,0,10],[50,10,10],[50,-10,10],[50,-20,10],[50,20,10],[50,30,10]],[
[0, 0, [[0,0],[0,0],5,0,1,[1,-1],"0 [1,-1]",[[[0,0],[1,-1],1]]]],
[1, 0, [[1,-1],[1,-1],5,0,1,[1,-1],"0 [1,-1]",[[[1,-1],[3,-3],1]]]],
[2, 0, [[3,-3],[2,-2],5,0,1,[1,-1],"0 [1,-1]",[[[3,-3],[6,-6],1]]]],
[3, 0, [[6,-6],[3,-3],5,0,1,[1,-1],"0 [1,-1]",[[[6,-6],[10,-10],1]]]],
[4, 0, [[10,-10],[4,-4],5,0,1,[1,-1],"0 [1,-1]",[[[10,-10],[15,-15],1]]]],
[5, 0, [[15,-15],[5,-5],5,0,1,[1,-1],"0 [1,-1]",[[[15,-15],[21,-21],1]]]],
[6, 0, [[21,-21],[6,-6],5,0,1,[1,-1],"0 [1,-1]",[[[21,-21],[28,-28],1]]]],
[7, 0, [[28,-28],[7,-7],5,0,1,[1,-1],"0 [1,-1]",[[[28,-28],[36,-36],1]]]],
[8, 0, [[36,-36],[8,-8],5,0,1,[1,-1],"0 [1,-1]",[[[36,-36],[45,-45],1]]]],
[9, 0, [[45,-45],[9,-9],5,0,1,[1,1],"0 [1,1]",[[[45,-45],[55,-53],1]]]],
[10, 0, [[55,-53],[10,-8],5,0,1,[-1,1],"0 [-1,1]",[[[55,-53],[64,-60],1]]]],
[11, 0, [[64,-60],[9,-7],5,0,1,[-1,1],"0 [-1,1]",[[[64,-60],[72,-66],1]]]],
[12, 0, [[72,-66],[8,-6],5,0,1,[-1,1],"0 [-1,1]",[[[72,-66],[79,-71],1]]]],
[13, 0, [[79,-71],[7,-5],5,0,1,[-1,1],"0 [-1,1]",[[[79,-71],[85,-75],1]]]],
[14, 0, [[85,-75],[6,-4],5,0,1,[-1,1],"0 [-1,1]",[[[85,-75],[90,-78],1]]]],
[15, 0, [[90,-78],[5,-3],5,0,1,[-1,1],"0 [-1,1]",[[[90,-78],[94,-80],1]]]],
[16, 0, [[94,-80],[4,-2],5,0,1,[-1,1],"0 [-1,1]",[[[94,-80],[97,-81],1]]]],
[17, 0, [[97,-81],[3,-1],5,0,1,[-1,1],"0 [-1,1]",[[[97,-81],[99,-81],1]]]],
[18, 0, [[99,-81],[2,0],5,0,1,[-1,1],"0 [-1,1]",[[[99,-81],[100,-80],1]]]],
[19, 0, [[100,-80],[1,1],5,0,1,[-1,1],"0 [-1,1]",[[[100,-80],[100,-78],1]]]],
[20, 0, [[100,-78],[0,2],5,0,1,[-1,1],"0 [-1,1]",[[[100,-78],[99,-75],1]]]],
[21, 0, [[99,-75],[-1,3],5,0,1,[-1,1],"0 [-1,1]",[[[99,-75],[97,-71],1]]]],
[22, 0, [[97,-71],[-2,4],5,0,1,[-1,1],"0 [-1,1]",[[[97,-71],[94,-66],1]]]],
[23, 0, [[94,-66],[-3,5],5,0,1,[-1,1],"0 [-1,1]",[[[94,-66],[90,-60],1]]]],
[24, 0, [[90,-60],[-4,6],5,0,1,[-1,1],"0 [-1,1]",[[[90,-60],[85,-53],1]]]],
[25, 0, [[85,-53],[-5,7],5,0,1,[-1,1],"0 [-1,1]",[[[85,-53],[79,-45],1]]]],
[26, 0, [[79,-45],[-6,8],5,0,1,[-1,1],"0 [-1,1]",[[[79,-45],[72,-36],1]]]],
[27, 0, [[72,-36],[-7,9],5,0,1,[-1,-1],"0 [-1,-1]",[[[72,-36],[64,-28],1]]]],
[28, 0, [[64,-28],[-8,8],5,0,1,[-1,-1],"0 [-1,-1]",[[[64,-28],[55,-21],1]]]],
[29, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[30, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[31, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[32, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[33, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[34, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[35, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[36, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[37, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[38, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[39, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[40, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[41, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[42, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[43, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[44, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[45, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[46, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[47, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[48, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[49, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[50, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[51, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[52, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[53, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[54, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[55, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[56, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[57, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[58, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[59, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[60, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[61, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[62, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[63, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[64, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[65, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[66, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[67, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[68, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[69, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[70, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[71, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[72, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[73, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[74, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[75, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[76, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[77, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[78, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[79, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[80, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[81, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[82, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[83, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[84, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[85, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[86, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[87, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[88, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[89, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[90, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[91, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[92, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[93, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[94, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[95, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[96, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[97, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[98, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[99, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[100, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[101, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[102, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[103, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[104, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[105, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[106, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[107, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[108, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[109, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[110, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[111, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[112, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[113, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[114, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[115, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[116, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[117, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[118, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[119, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[120, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[121, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[122, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[123, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[124, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[125, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[126, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[127, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[128, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[129, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[130, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[131, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[132, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[133, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[134, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[135, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[136, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[137, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[138, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[139, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[140, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[141, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[142, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[143, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[144, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[145, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[146, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[147, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[148, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[149, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[150, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[151, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[152, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[153, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[154, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[155, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[156, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[157, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[158, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[159, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[160, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[161, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[162, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[163, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[164, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[165, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[166, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[167, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[168, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[169, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[170, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[171, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[172, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[173, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[174, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[175, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[176, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[177, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[178, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[179, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[180, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[181, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[182, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[183, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[184, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[185, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[186, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[187, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[188, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[189, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[190, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[191, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[192, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[193, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[194, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[195, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[196, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[197, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[198, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[199, 0, [[55,-21],[-9,7],5,0,0,[-1,-1],"0 [-1,-1]",[[[55,-21],[45,-15],1]]]],
[200, 1, [[55,-21],[-9,7],5,0,0,[-1,-1],"",[]]]
]];