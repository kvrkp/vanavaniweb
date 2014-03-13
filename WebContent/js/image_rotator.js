var howOften = 5; //number often in seconds to rotate
var current = 0; //start the counter at 0

// place your images, text, etc in the array elements here
var items = new Array();
items[0]="<img src='images/dr_sail.jpg_medium.jpg' border='0' />";
items[1]="<img src='images/girls.jpg_medium.jpg' border='0' />";
items[2]="<img src='images/mahesh_presents.jpg_medium.jpg' border='0' />";
items[3]="<img src='images/nagarathna_saileswaran.jpg_medium.jpg' border='0' />";
items[4]="<img src='images/narayanan_presents.jpg_medium.jpg' border='0' />";
items[5]="<img src='images/independence_day/ind_day01.jpg_medium.jpg' border='0' />";
items[6]="<img src='images/independence_day/ind_day02.jpg_medium.jpg' border='0' />";
items[7]="<img src='images/independence_day/ind_day03.jpg_medium.jpg' border='0' />";
items[8]="<img src='images/independence_day/ind_day04.jpg_medium.jpg' border='0' />";
items[9]="<img src='images/logo/emblem01.jpg_medium.jpg' border='0' />";
items[10]="<img src='images/mid_day_meal/SAM_4409.JPG_medium.jpg' border='0' />";
items[11]="<img src='images/mid_day_meal/SAM_4410.JPG_medium.jpg' border='0' />";
items[12]="<img src='images/mid_day_meal/SAM_4411.JPG_medium.jpg' border='0' />";
items[13]="<img src='images/mid_day_meal/SAM_4412.JPG_medium.jpg' border='0' />";
items[14]="<img src='images/mid_day_meal/SAM_4413.JPG_medium.jpg' border='0' />";
items[15]="<img src='images/mid_day_meal/SAM_4414.JPG_medium.jpg' border='0' />";
items[16]="<img src='images/mid_day_meal/SAM_4415.JPG_medium.jpg' border='0' />";
items[17]="<img src='images/mid_day_meal/SAM_4416.JPG_medium.jpg' border='0' />";
items[18]="<img src='images/mid_day_meal/SAM_4417.JPG_medium.jpg' border='0' />";
items[19]="<img src='images/mid_day_meal/SAM_4418.JPG_medium.jpg' border='0' />";
items[20]="<img src='images/mid_day_meal/SAM_4419.JPG_medium.jpg' border='0' />";
items[21]="<img src='images/mid_day_meal/SAM_4420.JPG_medium.jpg' border='0' />";
items[22]="<img src='images/mid_day_meal/SAM_4421.JPG_medium.jpg' border='0' />";
items[23]="<img src='images/mid_day_meal/SAM_4422.JPG_medium.jpg' border='0' />";
items[24]="<img src='images/mid_day_meal/SAM_4423.JPG_medium.jpg' border='0' />";
items[25]="<img src='images/mid_day_meal/SAM_4424.JPG_medium.jpg' border='0' />";
items[26]="<img src='images/school_facilities/library.jpg_medium.jpg' border='0' />";
items[27]="<img src='images/school_facilities/rosystem.jpg_medium.jpg' border='0' />";
items[28]="<img src='images/school_facilities/smartclass.jpg_medium.jpg' border='0' />";
items[29]="<img src='images/school_facilities/vanavani_001.jpg_medium.jpg' border='0' />";
items[30]="<img src='images/school_facilities/vanavani_002.jpg_medium.jpg' border='0' />";
items[31]="<img src='images/school_facilities/vanavani_003.jpg_medium.jpg' border='0' />";
items[32]="<img src='images/school_facilities/vanavani_004.jpg_medium.jpg' border='0' />";
items[33]="<img src='images/school_facilities/vanavani_005.jpg_medium.jpg' border='0' />";
items[34]="<img src='images/school_facilities/vanavani_006.jpg_medium.jpg' border='0' />";
items[35]="<img src='images/students/20131217_131909_Richtone(HDR).jpg_medium.jpg' border='0' />";
items[36]="<img src='images/students/20131217_132014_Richtone(HDR).jpg_medium.jpg' border='0' />";
items[37]="<img src='images/students/20131217_132046_Richtone(HDR).jpg_medium.jpg' border='0' />";
items[38]="<img src='images/students/20131217_132108_Richtone(HDR).jpg_medium.jpg' border='0' />";
items[39]="<img src='images/students/20131217_132136_Richtone(HDR).jpg_medium.jpg' border='0' />";
items[40]="<img src='images/students/students.JPG_medium.jpg' border='0' />";
items[41]="<img src='images/teachers/01_gobi_k.jpg_medium.jpg' border='0' />";
items[42]="<img src='images/teachers/02_meena_m.jpg_medium.jpg' border='0' />";
items[43]="<img src='images/teachers/03_chintamani_c.jpg_medium.jpg' border='0' />";
items[44]="<img src='images/teachers/04_kaliammal_k.jpg_medium.jpg' border='0' />";
items[45]="<img src='images/teachers/05_deivakumar_s.jpg_medium.jpg' border='0' />";
items[46]="<img src='images/teachers/06_sathiamoorthy_s.jpg_medium.jpg' border='0' />";
items[47]="<img src='images/teachers/07_dhinakaran_m.jpg_medium.jpg' border='0' />";
items[48]="<img src='images/teachers/08_devi_g.jpg_medium.jpg' border='0' />";
items[49]="<img src='images/teachers/09_amutha_s.jpg_medium.jpg' border='0' />";
items[50]="<img src='images/teachers/10_amalorpuva_mary.jpg_medium.jpg' border='0' />";
items[51]="<img src='images/teachers/11_baby_s.jpg_medium.jpg' border='0' />";
items[52]="<img src='images/teachers/12_sobamani_r.jpg_medium.jpg' border='0' />";
items[53]="<img src='images/teachers/13_deeparani_r.jpg_medium.jpg' border='0' />";
items[54]="<img src='images/teachers/14_priya_s.jpg_medium.jpg' border='0' />";
items[55]="<img src='images/teachers/15_poornima_s.jpg_medium.jpg' border='0' />";
items[56]="<img src='images/tour/tour01.jpg_medium.jpg' border='0' />";
items[57]="<img src='images/tour/tour02.jpg_medium.jpg' border='0' />";
items[58]="<img src='images/tour/tour03.jpg_medium.jpg' border='0' />";
items[59]="<img src='images/tour/tour04.jpg_medium.jpg' border='0' />";
items[60]="<img src='images/vinayaka_chaturthi/vinayaka01.jpg_medium.jpg' border='0' />";
items[61]="<img src='images/vinayaka_chaturthi/vinayaka02.jpg_medium.jpg' border='0' />";
items[62]="<img src='images/vinayaka_chaturthi/vinayaka03.jpg_medium.jpg' border='0' />";
items[63]="<img src='images/vinayaka_chaturthi/vinayaka04.jpg_medium.jpg' border='0' />";

function rotater() {
	slot = (current % 4) + 1;
    document.getElementById("rimage"+slot).innerHTML = items[current];
    current = (current==items.length-1) ? 0 : current + 1;
    setTimeout("rotater()",howOften*1000);
}

window.onload=rotater;