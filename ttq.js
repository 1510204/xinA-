const quizData = [
 {
    question: "Mạng truyền thông quang có bao nhiêu thế hệ mạng quang ?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "2",
    explanation: "<br> - Thế hệ 1: Mạng quang đơn bước sóng <br>- Thế hệ 2: Mạng quang đa bước sóng"
  },
  {
    question: "Quá trình phát triển IP/WDM được chia ra làm mấy giai đoạn chính ?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: "3",
    explanation: "<br>- Giai đoạn IP/ATM/SDH/WDM <br>- Giai đoạn IP/SDH/WDM <br>- Giai đoạn IP/WDM"
  },
  {
    question: "Định dạng của GFP gồm:",
    options: [
      "Phần mào đầu chính và vùng tải trọng",
      "Phần mào đầu chính và con trỏ",
      "Vùng tải trọng và con trỏ",
      "Phần mào đầu chính, vùng tải trọng và con trỏ"
    ],
    answer: "Phần mào đầu chính và vùng tải trọng"
  },
  {
    question: "Mạng truyền thông quang hiện nay, thường sử dụng công nghệ ghép kênh:",
    options: [
      "TDM",
      "WDM",
      "FDM",
      "Tất cả đáp án trên"
    ],
    answer: "WDM"
  },
  {
    question: "Nhận định nào sau đây đúng về cấu trúc khung STM-1:",
    options: [
      "9x270 byte truyền ở tốc độ 155,52 Mb/s",
      "9x261 byte truyền ở tốc độ 155,52 Mb/s",
      "9x270 byte truyền ở tốc độ 125 Mb/s",
      "9x261 byte truyền ở tốc độ 125 Mb/s"
    ],
    answer: "9x270 byte truyền ở tốc độ 155,52 Mb/s"
  },
  {
    question: "Mạng truyền thông quang có thể được chia thành:",
    options: [
      "Mạng đô thị và cự li dài",
      "Mạng đô thị, mạng cự li dài và mạng truy cập",
      "Mạng đô thị, mạng cự li dài, mạng LAN và mạng truy nhập",
      "Mạng LAN, WAN"
    ],
    answer: "Mạng đô thị và cự li dài"
  },
  {
    question: "10 bit giá trị con trỏ AU-4 khi không chèn là 0100111000. Tìm cấu trúc 10 bit giá trị con trỏ trong khung liền sau khung chèn dương:",
    options: [
      "0100111001",
      "IDIDIDIDID",
      "1110010010",
      "0001101101"
    ],
    answer: "0100111001"
  },
  {
    question: "Nhận định nào sau đây đúng về cấu trúc khung OPU-k:",
    options: [
      "4 dòng x 3810 cột",
      "4 dòng x 3824 cột",
      "4 dòng x 4080 cột",
      "4 dòng x 270 cột"
    ],
    answer: "4 dòng x 3810 cột"
  },
  {
    question: "Giá trị k trong các cấu trúc khung OPU-k, ODU-k, OUT-k:",
    options: [
      "1",
      "2",
      "3",
      "Cả 3 đáp án"
    ],
    answer: "Cả 3 đáp án"
  },
  {
    question: "Hãy xác định tốc độ truyền của tín hiệu OUT-k biết chu kì khung là 48,971 us:",
    options: [
      "2,499 Mbps",
      "2,667 Mbps",
      "2,467 Mbps",
      "2,488 Mbps"
    ],
    answer: "2,667 Mbps",
    explanation: "<br><img src='./image/caubt2.png'>"
  },
  {
    question: "Khi xảy ra chèn dương, các bit I, D trong con trỏ AU-4 PTR sẽ thay đổi:",
    options: [
      "5 bit I đảo dấu",
      "5 bit D đảo dấu",
      "5 bit I không thay đổi",
      "5 bit D không thay đổi"
    ],
    answer: "5 bit I đảo dấu",
    explanation: "Chèn dương là đảo I, giữ nguyên D, I là bit 0, D là bit 1"
  },
  {
    question: "Tuyến NG-SDH hoạt động với tốc độ truyền dẫn 10 Gb/s. Biết khung GFP có trường tải trọng 2000 byte liên tục và bỏ qua trường mào đầu tải trọng mở rộng. Hãy xác định chu kỳ truyền khung (độ dài khung) GFP:",
    options: [
      "1,6 ms",
      "16 ms",
      "1,8 ms",
      "18 ms"
    ],
    answer: "1,6 ms"
  },
  {
    question: "Bài toán LTD là:",
    options: [
      "Bài toán thiết kế kiến trúc tuyến quang",
      "Bài toán định tuyến bước sóng",
      "Bài toán gán bước sóng",
      "Cả 3 đáp án trên"
    ],
    answer: "Bài toán thiết kế kiến trúc tuyến quang"
  },
  {
    question: "Cho mạng quang có 5 nút (A, B, C, D và E) với 4 liên kết (AB, BC, CD, DE)Mỗi liên kết có thể có 3 bước sóng. Giả sử các yêu cầu tuyến quang(lightpath) là:{A, C), {A, B}, {D, E), {C, E}, {B, D}, {C, D}. Kết quả nào sau đây là sai khi các bước sóng được gán theo giải thuật First-fit:",
    options: [
      "Bước sóng thứ nhất: {A, C}, {D, E}, {C, D}",
      "Bước sóng thứ hai: {A, B}, {D, E}",
      "Bươc sóng thứ ba: {B, D}",
      "Cả 3 đáp án sai"
    ],
    answer: "Bước sóng thứ hai: {A, B}, {D, E}"
  },
  {
    question: "Có bao nhiêu phương pháp kết chuỗi trong NG-SDH:",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: "2",
    explanation: "<br>- Kết chuỗi liên tục (CCAT): Yêu cầu các container phải nằm liền kề nhau và được xử lý như một khối thống nhất trên toàn mạng. <br>- Kết chuỗi ảo (VCAT): Cho phép ghép các container không liền kề thành một luồng dữ liệu logic lớn hơn."
  },
  {
    question: "Xét về mặt chức năng, một mạng có thể được xem như bao gồm mặt phẳng nào?",
    options: [
      "Mặt phẳng dữ liệu, mặt phẳng điều khiển, mặt phẳng quản lý",
      "Mặt phẳng điều khiển, mặt phẳng quản lý, mặt phẳng giám sát",
      "Mặt phẳng dữ liệu, mặt phẳng quản lý, mặt phẳng giám sát",
      "Mặt phẳng dữ liệu, mặt phẳng điều khiển, mặt phẳng giám sát"
    ],
    answer: "Mặt phẳng dữ liệu, mặt phẳng điều khiển, mặt phẳng quản lý"
  },
  {
    question: "Kích thước tải trọng của khung Ethernet là",
    options: [
      "1526 byte",
      "46-1500 byte",
      "146-1526 byte",
      "1500 byte"
    ],
    answer: "46-1500 byte"
  },
  {
    question: "Mạng thụ động PON bao gồm bao nhiêu phần chính",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "3"
  },
  {
    question: "Cho mạng quang có 6 nút (A, B, C, D, E và F)... Kết quả gán bước sóng nào sau đây là đúng khi các bước sóng được gán theo giải thuật tô màu đồ thị ở lần tô thứ 3",
    options: [
      "Đỉnh 1: Bước sóng 1 (lamda 0), Đỉnh 2: bước sóng 2 (lamda 1), Đỉnh 3: bước sóng 1 (lamda 0).",
      "Đỉnh 2: Bước sóng 1 (lamda 0), Đỉnh 1: bước sóng 2 (lamda 1), Đỉnh 3: bước sóng 2 (lamda 1).",
      "Đỉnh 2: Bước sóng 1 (lamda 0), Đỉnh 1: bước sóng 2 (lamda 1), Đỉnh 5: bước sóng 1 (lamda 0).",
      "Đỉnh 1: bước sóng 1 (lamda 0), Đỉnh 2: bước sóng 2 (lamda 1), Đỉnh 5: bước sóng 2 (lamda 1)."
    ],
    answer: "Đỉnh 2: Bước sóng 1 (lamda 0), Đỉnh 1: bước sóng 2 (lamda 1), Đỉnh 3: bước sóng 2 (lamda 1)."
  },
  {
    question: "Các giao thức quan trọng được sử dụng trong SDH thế hệ sau:",
    options: [
      "Thủ tục đóng khung chung (GFP)",
      "Kết chuỗi ảo (VCAT)",
      "Cơ chế điều chỉnh dung lượng (LCAS)",
      "Cả 3 đáp án trên"
    ],
    answer: "Cả 3 đáp án trên"
  },
  {
    question: "Một tuyến Ethernet trong đó một trạm phát các khung có trường dữ liệu thông tin 1500 byte liên tục. Giả sử một xung điện gây hư hỏng dữ liệu dài 1 ms xảy ra trên đường truyền, hãy tính số khung bị hỏng với tốc độ Ethernet là 1 Gbit/s",
    options: [
      "92 khung",
      "93 khung",
      "82 khung",
      "83 khung"
    ],
    answer: "83 khung"
  },
  {
    question: "Một OLT bao gồm bao nhiêu lớp thành phần chính",
    options: [
      "3",
      "4",
      "2",
      "5"
    ],
    answer: "4",
    explanation: " Slide Chương 6 - Trang 11<br>- Khối thích ứng dịch vụ <br> - Khối kết nối chéo <br> -Lớp Mac <br> - PMD"
  },
  {
    question: "Trong cấu tạo con trỏ AU-4 PtR, các byte chèn âm là:",
    options: [
      "H3 H3 H3",
      "NNNNSS",
      "IDIDIDIDID",
      "NNNN"
    ],
    answer: "H3 H3 H3"
  },
  {
    question: "Nhận định nào sau đây đúng về cấu trúc khung OTU-k:",
    options: [
      "4 dòng x 3810 cột",
      "4 dòng x 3824 cột",
      "4 dòng x 4080 cột",
      "4 dòng x 270 cột"
    ],
    answer: "4 dòng x 4080 cột"
  },
  {
    question: "Cấu trúc khung STM-1 gồm",
    options: [
      "Phần mào đầu",
      "Phần con trỏ AU-4 (AU 4 PTR)",
      "Phần container VC-4",
      "Cả 3 đáp án trên"
    ],
    answer: "Cả 3 đáp án trên"
  },
  {
    question: "Các loại chức năng chính của LCAS",
    options: [
      "Loại bỏ tạm thời thành viên",
      "Xóa thành viên",
      "Thêm thành viên",
      "Cả 3 đáp án trên"
    ],
    answer: "Cả 3 đáp án trên"
  },
  {
    question: "Trong những câu dưới đây, câu nào đúng cho kiến trúc mạng quang WDM hình sao?",
    options: [
      "Các điểm truyền thông được đấu nối tiếp nhau thành một vòng tròn",
      "Các điểm truyền thông được đấu nối với nhau thông qua một coupler sao",
      "Các điểm truyền thông được đấu nối đồng thời với nhau",
      "Các điểm truyền thông được đấu nối với nhau tạo thành đường thẳng"
    ],
    answer: "Các điểm truyền thông được đấu nối với nhau thông qua một coupler sao"
  },
  {
    question: "Trong những câu dưới đây, câu nào đúng cho Mạng quang đa bước sóng:",
    options: [
      "Tất cả các chuyển mạch và các chức năng mạng thông minh khác được xử lý bằng điện tử",
      "Có định tuyến, chuyển mạch và tính thông minh trong lớp quang",
      "Có khả năng tách ghép kênh",
      "Cả 3 đáp án trên"
    ],
    answer: "Cả 3 đáp án trên"
  },
  {
    question: "Khoảng cách giữa OLT và OLT/ONU với mạng FTTH",
    options: [
      "5 km – 10 km",
      "25 km",
      "30 km",
      "< 20 km"
    ],
    answer: "< 20 km"
  },
  {
    question: "Nhận định nào sau đây về Mạng cự li dài là đúng:",
    options: [
      "Kết nối các nhóm CO trong một thành phố hoặc một vùng (A)",
      "Kết nối giữa các thành phố hoặc các vùng khác nhau (B)",
      "Khoảng các giữa các CO khoảng hàng trăm đến hàng ngàn km (C)",
      "Cả 2 đáp án B và C"
    ],
    answer: "Cả 2 đáp án B và C"
  },
  {
    question: "10 bit giá trị con trỏ AU-4 khi không chèn là 0100111000. Tìm cấu trúc 10 bit giá trị con trỏ trong khung chèn dương? (Chèn dương là đảo I, giữ nguyên D, I là bit 0, D là bit 1):",
    options: [
      "0100111001",
      "IDIDIDIDID",
      "1110010010",
      "0001101101"
    ],
    answer: "1110010010"
  },
  {
    question: "10 bit giá trị con trỏ AU-4 khi không chèn là 0100111000. Tìm cấu trúc 10 bit giá trị con trỏ trong khung chèn âm? Chèn âm là đảo D, giữ nguyên I, I là bit 0, D là bit 1",
    options: [
      "0100111001",
      "IDIDIDIDID",
      "1110010010",
      "0001101101"
    ],
    answer: "0001101101"
  },
  {
    question: "10 bit giá trị con trỏ AU-4 khi không chèn là 0100111000. Tìm cấu trúc 10 bit giá trị con trỏ trong khung liền sau khung chèn âm? (Đổi sang hệ 10 sau đó giảm 1 đơn vị, rồi chuyển lại về hệ nhị phân):",
    options: [
      "0100111001",
      "0100110111",
      "1110010010",
      "0001101101"
    ],
    answer: "0100110111"
  },
  {
    question: "Phạm vi chỉ thị của AU-4 PtR trong khung AUG là bao nhiêu?",
    options: [
      "1 : 782",
      "0 : 782",
      "0 : 783",
      "1 : 783"
    ],
    answer: "0 : 782",
    explanation:"Tổng số nhóm byte trong khung AUG cần đánh địa chỉ là: N(BC) = 261 (byte) x 9 : 3 = 783 nhóm. Đánh số từ 0 đến 782."

  },
  {
    question: "Quá trình phát triển mạng ghép theo bước sóng (WDM) có mấy thế hệ?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "3",
    explanation: "<br> - Thế hệ 1: Hệ thống WDM điểm-điểm với các MUX/DEMUX <br> - Thế hệ 2: Hệ thống WDM đa điểm với các OADM và OXC <br> - Thế hệ 3: Mạng quang WDM với chuyển mạch & định tuyến bước sóng"
  },
  {
    question: "Thế hệ 1, hệ thống WDM điểm-điểm với các?",
    options: [
      "MUX/DEMUX",
      "OADM và OXC",
      "Chuyển mạch và định tuyến",
      "Tất cả đều đúng"
    ],
    answer: "MUX/DEMUX"
  },
  {
    question: "Thế hệ 2, hệ thống WDM điểm - đa điểm với các?",
    options: [
      "MUX/DEMUX",
      "OADM và OXC",
      "Chuyển mạch và định tuyến",
      "Tất cả đều đúng"
    ],
    answer: "OADM và OXC"
  },
  {
    question: "Thế hệ 3, hệ thống WDM điểm điểm với các?",
    options: [
      "MUX/DEMUX",
      "OADM và OXC",
      "Chuyển mạch và định tuyến",
      "Tất cả đều đúng"
    ],
    answer: "Chuyển mạch và định tuyến"
  },
  {
    question: "Trong những vai trò sau, đâu không phải là vai trò của WDM?",
    options: [
      "Lớp quang WDM cung cấp các “sợi quang ảo” trong 1 sợi quang",
      "Cho phép đáp ứng sự bùng nổ nhu cầu sử dụng sợi quang",
      "Có thể cho phép tăng dần sự phụ thuộc vào SONET/SDH",
      "Đơn giản hóa việc truy nhập trực tiếp tới tài nguyên dung lượng sợi quang bởi các giao thức khác nhau."
    ],
    answer: "Có thể cho phép tăng dần sự phụ thuộc vào SONET/SDH"
  },
  {
    question: "WDM không cho phép các nhà vận hành mạng thực hiện?",
    options: [
      "Định tuyến, giám sát và quản lý bước sóng",
      "Tái định tuyến bước sóng",
      "Các dịch vụ cho thuê bước sóng, các mạng riêng ảo",
      "Tất cả đều sai"
    ],
    answer: "Tất cả đều sai"
  },
  {
    question: "Đáp án nào sau đây không phải là yêu cầu kiến trúc mạng?",
    options: [
      "Tái sử dụng, chuyển đổi bước sóng",
      "Không trong suốt",
      "Có khả năng tồn tại khi gặp sự cố",
      "Chuyển mạch linh hoạt"
    ],
    answer: "Không trong suốt"
  },
  {
    question: "Có bao nhiêu loại giao diện mạng quang?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "3",
    explanation: "<br>- UNI (User Network Interface) <br> - ANI (Access Network Interface) <br> - INI (Interconnect Network Interface)"
  },
  {
    question: "Các giao diện mạng quang là?",
    options: [
      "UNI, ANI, INI",
      "UNI, ANI, TNI",
      "UNI, NNI, INI",
      "UNI, NNI, ANI"
    ],
    answer: "UNI, NNI, INI"
  },
  {
    question: "Với các mạng hình lưới WDM (toàn quang) thuần túy, có bao nhiêu phương pháp chuyển mạch phổ biến?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "2",
    explanation: "<br>- Chuyển mạch bước sóng (Wavelength Switching)<br>- Chuyển mạch gói quang (Optical Packet Switching)",
  },
  {
    question: "Các phương pháp chuyển mạch phổ biến là?",
    options: [
      "Chuyển mạch bước sóng và chuyển mạch nút",
      "Chuyển mạch bước sóng và chuyển mạch gói quang",
      "Chuyển mạch gói quang và chuyển mạch nút",
      "Chuyển mạch gói quang và chuyển mạch cấu trúc"
    ],
    answer: "Chuyển mạch bước sóng và chuyển mạch gói quang"
  },
  {
    question: "Thiết bị đầu cuối đường quang viết tắt là?",
    options: [
      "OLT",
      "OA",
      "OADM",
      "Tx/Rx"
    ],
    answer: "OLT"
  },
  {
    question: "OLT có bao nhiêu khối chức năng?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "4"
  },
  {
    question: "Khối chức năng nào là không bắt buộc phải có trong OLT?",
    options: [
      "Transponder",
      "Mux/Demux",
      "Tx/Rx",
      "OA"
    ],
    answer: "OA"
  },
  {
    question: "OLT không được sử dụng trong cấu hình mạng WDM nào?",
    options: [
      "Điểm - điểm",
      "Đường thẳng",
      "Lưới",
      "Tất cả đều đúng"
    ],
    answer: "Lưới"
  },
  {
    question: "Các bộ EDFA được sử dụng tuần hoàn dọc theo tuyến sợi quang với khoảng cách?",
    options: [
      "100 - 120 km",
      "80 - 100 km",
      "90 - 150 km",
      "80 - 120 km"
    ],
    answer: "80 - 120 km",
    explanation: "Slide Chương 3 - Trang 22"
  },
  {
    question: "Phát biểu nào sau đây là sai với 3R?",
    options: [
      "Các bộ chuyển phát 3R đơn giản chỉ hoạt động cố định cho một tốc độ bit và giao thức khách hàng cụ thể",
      "Chức năng định thời (khôi phục đồng hồ) khó thực hiện cho các tốc độ bit khác nhau",
      "Các bộ chuyển phát khác nhau cần cho các tốc độ bit và các giao thức khác nhau",
      "Các bộ chuyển phát 3R đơn giản có thể hoạt động cho nhiều tốc độ bit và giao thức khách hàng cụ thể"
    ],
    answer: "Các bộ chuyển phát 3R đơn giản có thể hoạt động cho nhiều tốc độ bit và giao thức khách hàng cụ thể",
    explanation: "Slide Chương 3 - Trang 24"
  },
  {
    question: "Phát biểu nào sau đây là sai với 1R?",
    options: [
      "Các bộ EDFA được sử dụng một cách tuần hoàn dọc tuyến sợi quang (khoảng cách 80-120 km)",
      "Đôi khi các bộ khuyếch đại Raman được sử dụng",
      "Tại mỗi node chỉ có thể có một tầng khuyếch đại EDFA",
      "Cấu hình tương tự theo hướng ngược lại"
    ],
    answer: "Tại mỗi node chỉ có thể có một tầng khuyếch đại EDFA",
    explanation: "Slide Chương 3 - Trang 22 <br> Tại mỗi node có thể có nhiều tầng khuyếch đại EDFA"
  },
  {
    question: "Thiết bị xen rẽ quang được viết tắt là ?",
    options: [
      "OXC",
      "ATM",
      "OLT",
      "OADM"
    ],
    answer: "OADM"
  },
  {
    question: "OADM không cho phép triển khai cấu hình nào?",
    options: [
      "Đường thẳng",
      "Vòng",
      "Lưới",
      "Tất cả đáp án trên"
    ],
    answer: "Lưới",
    explanation: " <br>- OADM Cho phép triển khai các cấu hình đường thẳng và cấu hình vòng <br>- OXC Cho phép triển khai các cấu hình lưới"
  },
  {
    question: "Phát biểu nào sau đây là sai về OADM?",
    options: [
      "Kích cỡ OADM = Tổng số bước sóng được hỗ trợ",
      "Hoạt động xen/rẽ ảnh hưởng tới các kênh khác",
      "Có khả năng cấu hình lại bởi điều khiển phần mềm từ xa",
      "Cho phép kích cỡ OADM theo sự tăng dần lưu lượng"
    ],
    answer: "Hoạt động xen/rẽ ảnh hưởng tới các kênh khác"
  },
  {
    question: "Phát biểu nào sau đây là đúng về cấu trúc OADM cố định",
    options: [
      "Số lượng các kênh lamda là cố định",
      "Xen hoặc rẽ vĩnh viễn một số kênh lamda cụ thể",
      "Chỉ có duy nhất một kiểu cấu trúc",
      "Tất cả đáp án trên"
    ],
    answer: "Xen hoặc rẽ vĩnh viễn một số kênh lamda cụ thể"
  },
  {
    question: "Các kiểu cấu trúc OADM cố định là?",
    options: [
      "Song song hoặc nối tiếp",
      "Xen/rẽ kênh đơn hoặc theo băng",
      "A và B đều đúng",
      "A và B đều sai"
    ],
    answer: "A và B đều đúng"
  },
  {
    question: "Hình ảnh sau là kiểu cấu trúc OADM nào?",
    image: "./image/cau62.png",
    options: [
      "Nối tiếp, đơn kênh",
      "Song song, đơn kênh",
      "Nối tiếp, theo băng",
      "Song song, theo băng"
    ],
    answer: "Song song, đơn kênh"
  },
  {
    question: "Hình ảnh sau là kiểu cấu trúc OADM nào?",
    image: "./image/cau63.png",
    options: [
      "Nối tiếp, đơn kênh",
      "Song song, đơn kênh",
      "Nối tiếp, theo băng",
      "Song song, theo băng"
    ],
    answer: "Song song, theo băng"
  },
  {
    question: "Hình ảnh sau là kiểu cấu trúc OADM nào?",
    image: "./image/cau64.png",
    options: [
      "Nối tiếp, đơn kênh",
      "Song song, đơn kênh",
      "Nối tiếp, theo băng",
      "Song song, theo băng"
    ],
    answer: "Nối tiếp, đơn kênh"
  },
  {
    question: "Hình ảnh sau là kiểu cấu trúc OADM nào?",
    image: "./image/cau65.png",
    options: [
      "Nối tiếp, đơn kênh",
      "Song song, đơn kênh",
      "Nối tiếp, theo băng",
      "Song song, theo băng"
    ],
    answer: "Nối tiếp, theo băng"
  },
  {
    question: "Cấu trúc OADM cấu hình lại (ROAM) có mấy kiểu cấu trúc?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "3",
    explanation: "<br>- Partial tunable OADM: Sử dụng kiến trúc song song với các chuyển mạch quang 2x2. <br>- Full tunable OADM: Sử dụng chuyển mạch quang đa cổng lớn. <br>- Fully tunable serial OADM: Sử dụng các OADM kênh đơn có thể điều chỉnh nối tiếp nhau"
  },
  {
    question: "Phát biểu nào sau đây là sai với chuyển mạch điện và các bộ chuyển phát quang (OEO) trong OXC?",
    options: [
      "Khả năng giám sát và tái sinh 3R",
      "Dung lượng chuyển mạch bị giới hạn, quá phức tạp và chi phí cao cho chuyển mạch hàng chục Gbit/s",
      "Phụ thuộc vào tốc độ bit và tín hiệu khách hàng",
      "Kích thước nhỏ gọn và tiêu thụ tiết kiệm điện"
    ],
    answer: "Kích thước nhỏ gọn và tiêu thụ tiết kiệm điện"
  },
  {
    question: "Phát biểu nào sau đây là sai với chuyển mạch toàn quang (All-Opitcal) trong OXC?",
    options: [
      "Khả năng định cỡ về dung lượng tốt",
      "Kích thước nhỏ gọn và tiêu thụ tiết kiệm điện",
      "Công nghệ mới, không có giám sát miền số, hiện tại chi có tái sinh 2R",
      "Không phụ thuộc vào tốc độ bit và tín hiệu khách hàng"
    ],
    answer: "Công nghệ mới, không có giám sát miền số, hiện tại chi có tái sinh 2R"
  },
  {
    question: "Phát biểu nào sau đây là sai đối với chuyển mạch quang với OEO?",
    options: [
      "Kết hợp các ưu điểm của chuyển mạch quang với giám sát miền số và khả năng tái sinh của các bộ chuyển phát quang",
      "Không còn tồn tại vấn đề về giảm tính trong suốt",
      "Kích cỡ cồng kềnh",
      "Tiêu thụ nhiều điện năng"
    ],
    answer: "Không còn tồn tại vấn đề về giảm tính trong suốt"
  },
  {
    question: "Có bao nhiêu giai đoạn phát triển IP/WDM?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "3"
  },
  {
    question: "Phát biểu nào sau đây là sai về giai đoạn IP/ATM/SDH/WDM?",
    options: [
      "Là giai đoạn đầu tiên trong công nghệ truyền tải trên quang",
      "Các IP datagram phải thực hiện chia thành các tế bào ATM để chuyển từ nguồn tới đích",
      "Trước chuyển mạch ATM cuối cùng, các IP datagram được khôi phục từ các tế bào.",
      "Chi phí lắp đặt, vận hành và bảo dưỡng tốn kém nhất"
    ],
    answer: "Trước chuyển mạch ATM cuối cùng, các IP datagram được khôi phục từ các tế bào."
  },
  {
    question: "Công nghệ nào không được sử dụng trong giai đoạn IP/SDH/WDM?",
    options: [
      "Chuyển mạch ATM",
      "Router IP",
      "MPLS",
      "Tất cả đáp án trên"
    ],
    answer: "Chuyển mạch ATM"
  },
  {
    question: "Phát biểu nào sau đây là sai trong giai đoạn IP/SDH/WDM?",
    options: [
      "Các IP datagram được chuyển thẳng xuống tầng SDH",
      "Cho phép thực hiện kỹ thuật lưu lượng nhờ vào khả năng thiết lập kênh ảo VC",
      "Cho phép giao thức điều khiển IP quản lý trạng thái thiết bị mà không xác định rõ biên giới của các IP datagram",
      "Không thể xử lý với các IP datagram có độ dài thay đổi"
    ],
    answer: "Không thể xử lý với các IP datagram có độ dài thay đổi"
  },
  {
    question: "Trong IP/WDM, các bước sóng khác nhau có thể xen/rẽ hoặc chuyển đổi bước sóng ở các nút khác nhau nhờ thiết bị nào?",
    options: [
      "OXC",
      "OADM",
      "Bộ định tuyến bước sóng quang",
      "Tất cả đáp án trên"
    ],
    answer: "Tất cả đáp án trên"
  },
  {
    question: "Phiên bản nào tạo ra khả năng phục hồi, phát hiện lỗi và giám sát nhanh?",
    options: [
      "IP/ATM/SDH/WDM",
      "IP/SDH/WDM",
      "IP/WDM",
      "Tất cả đáp án trên"
    ],
    answer: "IP/WDM"
  },
    {
    question: "Kết chuỗi ảo bậc thấp sử dụng container nào?",
    options: [
      "VC12",
      "VC2",
      "VC3",
      "VC4"
    ],
    answer: "VC12",
    explanation: "<br>- Kết chuỗi ảo bậc thấp (LO-VCAT) sử dụng XVC12 (VC12-Xv, X=1...64). <br>- Kết chuỗi ảo bậc cao (HO-VCAT) sử dụng XVC3 hoặc VC4 (VC3/4-Xv, X=1...256), cung cấp dung lượng tải X lần 48.384 hoặc 149.760kbit/s"
  },
  {
    question: "Các giải pháp truyền tải IP qua quang tập trung vào",
    options: [
      "Giảm tính năng dư thừa",
      "Giảm mào đầu giao thức",
      "Đơn giản hóa công việc quản lý",
      "Tất cả đáp án trên"
    ],
    answer: "Tất cả đáp án trên"
  },
    {
    question: "STS-24 tương đương với?",
    options: [
      "STM - 4",
      "STM - 16",
      "STM - 64",
      "STM - 8"
    ],
    answer: "STM - 8",
    explanation: "Tỷ lệ chuyển đổi là: 1 STM-n = STS-3n."
  },
  {
    question: "Tầng IP trong kiến trúc IP/WDM có tác dụng?",
    options: [
      "Cung cấp các liên kết phi kết nối và có khả năng tự sửa lỗi",
      "Kết nối định hướng, yêu cầu thiết lập một kênh ảo VC giữa nguồn và đích trước khi thông tin được trao đổi",
      "Sắp xếp dữ liệu tốc độ thấp, các kênh TDM vào các khung đồng bộ để truyền tải qua mạng truyền tải tốc độ cao",
      "Tất cả đáp án trên"
    ],
    answer: "Cung cấp các liên kết phi kết nối và có khả năng tự sửa lỗi"
  },
  {
    question: "Tầng ATM trong kiến trúc IP/WDM có tác dụng?",
    options: [
      "Cung cấp các liên kết phi kết nối và có khả năng tự sửa lỗi",
      "Kết nối định hướng, yêu cầu thiết lập một kênh ảo VC giữa nguồn và đích trước khi thông tin được trao đổi",
      "Sắp xếp dữ liệu tốc độ thấp, các kênh TDM vào các khung đồng bộ để truyền tải qua mạng truyền tải tốc độ cao",
      "Tất cả đáp án trên"
    ],
    answer: "Kết nối định hướng, yêu cầu thiết lập một kênh ảo VC giữa nguồn và đích trước khi thông tin được trao đổi"
  },
  {
    question: "Tầng SDH trong kiến trúc IP/WDM có tác dụng?",
    options: [
      "Cung cấp các liên kết phi kết nối và có khả năng tự sửa lỗi",
      "Kết nối định hướng, yêu cầu thiết lập một kênh ảo VC giữa nguồn và đích trước khi thông tin được trao đổi",
      "Sắp xếp dữ liệu tốc độ thấp, các kênh TDM vào các khung đồng bộ để truyền tải qua mạng truyền tải tốc độ cao",
      "Tất cả đáp án trên"
    ],
    answer: "Sắp xếp dữ liệu tốc độ thấp, các kênh TDM vào các khung đồng bộ để truyền tải qua mạng truyền tải tốc độ cao"
  },
  {
    question: "Chọn phát biểu sai về tầng SDH?",
    options: [
      "Sắp xếp dữ liệu tốc độ thấp, các kênh TDM vào các khung đồng bộ để truyền tải qua mạng truyền tải tốc độ cao",
      "Cung cấp tất cả các chức năng OAM&P để thiết lập và quản lý các kết nối qua mạng.",
      "Có chức năng APS: cho phép thiết lập và chuyển mạch sang các đường dự phòng khi lỗi xảy ra trên đường hoạt động.",
      "Dịch vụ được khôi phục chậm"
    ],
    answer: "Dịch vụ được khôi phục chậm"
  },
  {
    question: "Mô hình mạng WDM có bao nhiêu loại cấu trúc?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "5",
    explanation: "<br> Điểm - điểm <br> Đường thẳng <br> Vòng <br> Lưới <br> Hình sao",
  },
  {
    question: "Cấu trúc WDM điểm-điểm có tên gọi khác là?",
    options: [
      "Cấu hình cố định",
      "Tái cấu hình",
      "Cấu hình chuyển mạch kênh",
      "Cấu hình chuyển mạch gói"
    ],
    answer: "Cấu hình cố định",
    explanation: "<br> WDM Điểm-điểm - Cấu hình cố định <br> WDM Tái cấu hình - Cấu hình chuyển mạch kênh <br> WDM Chuyển mạch - Cấu hình chuyển mạch gói.",
  },
  {
    question: "Cấu trúc WDM tái cấu hình có tên gọi khác là?",
    options: [
      "Cấu hình cố định",
      "Điểm - điểm",
      "Cấu hình chuyển mạch kênh",
      "Cấu hình chuyển mạch gói"
    ],
    answer: "Cấu hình chuyển mạch kênh",
    explanation: "<br> WDM Điểm-điểm - Cấu hình cố định <br> WDM Tái cấu hình - Cấu hình chuyển mạch kênh <br> WDM Chuyển mạch - Cấu hình chuyển mạch gói.",
  },
  {
    question: "Cấu trúc WDM chuyển mạch có tên gọi khác là?",
    options: [
      "Cấu hình cố định",
      "Điểm - điểm",
      "Cấu hình chuyển mạch kênh",
      "Cấu hình chuyển mạch gói"
    ],
    answer: "Cấu hình chuyển mạch gói",
    explanation: "<br> WDM Điểm-điểm - Cấu hình cố định <br> WDM Tái cấu hình - Cấu hình chuyển mạch kênh <br> WDM Chuyển mạch - Cấu hình chuyển mạch gói.",
  },
  {
    question: "Hàm trọng số dựa trên số chặng viết tắt là ?",
    options: [
      "HW",
      "DW",
      "AW",
      "TAW"
    ],
    answer: "HW",
    explanation: "<br> - HW (Hop-based Weight): Dựa trên số chặng <br> - DW (Distance-based Weight): Dựa trên khoảng cách <br> - AW (Available Wavelength-based Weight): Dựa trên bước sóng sẵn có <br> - HAW (Hop and Available Wavelength-based Weight): Dựa trên số chặng và bước sóng sẵn có <br> - TAW (Total Available Wavelength-based Weight): Dựa trên tổng số bước sóng và bước sóng sẵn có <br> - HTAW (Hop and Total Available Wavelength-based Weight): Dựa trên số chặng, tổng số bước sóng và bước sóng sẵn có."

  },
  {
    question: "Hàm trọng số dựa trên khoảng cách viết tắt là ?",
    options: [
      "HW",
      "DW",
      "AW",
      "TAW"
    ],
    answer: "DW",
    explanation: "<br> - HW (Hop-based Weight): Dựa trên số chặng <br> - DW (Distance-based Weight): Dựa trên khoảng cách <br> - AW (Available Wavelength-based Weight): Dựa trên bước sóng sẵn có <br> - HAW (Hop and Available Wavelength-based Weight): Dựa trên số chặng và bước sóng sẵn có <br> - TAW (Total Available Wavelength-based Weight): Dựa trên tổng số bước sóng và bước sóng sẵn có <br> - HTAW (Hop and Total Available Wavelength-based Weight): Dựa trên số chặng, tổng số bước sóng và bước sóng sẵn có."
  },
  {
    question: "Hàm trọng số dựa trên bước sóng sẵn có viết tắt là ?",
    options: [
      "AW",
      "HAW",
      "TAW",
      "HTAW"
    ],
    answer: "AW",
    explanation: "<br> - HW (Hop-based Weight): Dựa trên số chặng <br> - DW (Distance-based Weight): Dựa trên khoảng cách <br> - AW (Available Wavelength-based Weight): Dựa trên bước sóng sẵn có <br> - HAW (Hop and Available Wavelength-based Weight): Dựa trên số chặng và bước sóng sẵn có <br> - TAW (Total Available Wavelength-based Weight): Dựa trên tổng số bước sóng và bước sóng sẵn có <br> - HTAW (Hop and Total Available Wavelength-based Weight): Dựa trên số chặng, tổng số bước sóng và bước sóng sẵn có."
  },
  {
    question: "Hàm trọng số dựa trên số bước sóng sẵn có và số chặng viết tắt là ?",
    options: [
      "AW",
      "HAW",
      "TAW",
      "HTAW"
    ],
    answer: "HAW",
    explanation: "<br> - HW (Hop-based Weight): Dựa trên số chặng <br> - DW (Distance-based Weight): Dựa trên khoảng cách <br> - AW (Available Wavelength-based Weight): Dựa trên bước sóng sẵn có <br> - HAW (Hop and Available Wavelength-based Weight): Dựa trên số chặng và bước sóng sẵn có <br> - TAW (Total Available Wavelength-based Weight): Dựa trên tổng số bước sóng và bước sóng sẵn có <br> - HTAW (Hop and Total Available Wavelength-based Weight): Dựa trên số chặng, tổng số bước sóng và bước sóng sẵn có."
  },
  {
    question: "Hàm dựa trên tổng số bước sóng và số bước sóng sẵn có viết tắt là?",
    options: [
      "AW",
      "HAW",
      "TAW",
      "HTAW"
    ],
    answer: "TAW",
    explanation: "<br> - HW (Hop-based Weight): Dựa trên số chặng <br> - DW (Distance-based Weight): Dựa trên khoảng cách <br> - AW (Available Wavelength-based Weight): Dựa trên bước sóng sẵn có <br> - HAW (Hop and Available Wavelength-based Weight): Dựa trên số chặng và bước sóng sẵn có <br> - TAW (Total Available Wavelength-based Weight): Dựa trên tổng số bước sóng và bước sóng sẵn có <br> - HTAW (Hop and Total Available Wavelength-based Weight): Dựa trên số chặng, tổng số bước sóng và bước sóng sẵn có."
  },
  {
    question: "Hàm trọng số dựa trên số chặng, tổng số bước sóng và số bước sóng sẵn có viết tắt là?",
    options: [
      "AW",
      "HAW",
      "TAW",
      "HTAW"
    ],
    answer: "HTAW",
    explanation: "<br> - HW (Hop-based Weight): Dựa trên số chặng <br> - DW (Distance-based Weight): Dựa trên khoảng cách <br> - AW (Available Wavelength-based Weight): Dựa trên bước sóng sẵn có <br> - HAW (Hop and Available Wavelength-based Weight): Dựa trên số chặng và bước sóng sẵn có <br> - TAW (Total Available Wavelength-based Weight): Dựa trên tổng số bước sóng và bước sóng sẵn có <br> - HTAW (Hop and Total Available Wavelength-based Weight): Dựa trên số chặng, tổng số bước sóng và bước sóng sẵn có."
  },
  {
    question: "Kí hiệu nào cho biết mạng hoạt động ở cơ chế chia sẻ:",
    options: [
      "N + N",
      "1 + 1",
      "1 : N",
      "N : N"
    ],
    answer: "1 : N",
    explanation: "1 : N và 1 : 1 được xếp vào loại Shared (Bảo vệ chia sẻ)."
  },
  {
    question: "Lớp SDH bao gồm những lớp con nào?",
    options: [
      "Lớp tuyến (Path), lớp đoạn ghép (MS), lớp đoạn lặp (RS), lớp vật lý",
      "Lớp ứng dụng, lớp trình diễn, lớp phiên, lớp giao vận",
      "Lớp mạng, lớp liên kết dữ liệu, lớp vật lý, lớp truy nhập",
      "Lớp kênh quang, lớp đoạn quang, lớp khuếch đại quang"
    ],
    answer: "Lớp tuyến (Path), lớp đoạn ghép (MS), lớp đoạn lặp (RS), lớp vật lý"
  },
  {
    question: "Lớp SONET bao gồm những lớp con nào?",
    options: [
      "Lớp tuyến (Path), lớp đường (Line), lớp đoạn (Section) và lớp vật lý",
      "Lớp kênh, lớp đoạn ghép, lớp đoạn lặp và lớp vật lý",
      "Lớp IP, lớp MPLS, lớp Ethernet và lớp vật lý",
      "Lớp AAL, lớp ATM, lớp vật lý và lớp quang"
    ],
    answer: "Lớp tuyến (Path), lớp đường (Line), lớp đoạn (Section) và lớp vật lý"
  },
  {
    question: "Dựa trên khoảng cách mục tiêu, lớp vật lý SDH có thể phân loại thành các ứng dụng khác nhau nào?",
    options: [
      "Kết nối nội bộ (Intrafacility)",
      "Kết nối cự li ngắn, kết nối cự li dài, rất dài và cực dài",
      "Cả hai phương án trên đều đúng",
      "Chỉ bao gồm kết nối vệ tinh và vi ba"
    ],
    answer: "Cả hai phương án trên đều đúng"
  },
  {
    question: "Khung GFP (Generic Framing Procedure) có cấu trúc như thế nào?",
    options: [
      "Gồm mào đầu chính (Core Header) và phần tải trọng (Payload)",
      "Gồm mào đầu đoạn (SOH) và mào đầu đường (POH)",
      "Gồm nhãn MPLS và phần dữ liệu người dùng",
      "Gồm phần mở đầu (Preamble) và phần kiểm tra lỗi (FCS)"
    ],
    answer: "Gồm mào đầu chính (Core Header) và phần tải trọng (Payload)"
  },
  {
    question: "Có bao nhiêu phương pháp kết chuỗi trong NG-SDH?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "2",
    explanation:"Kết chuỗi liền kề và Kết chuỗi ảo"
  },
  {
    question: "LCAS là gì?",
    options: [
      "Giao thức điều chỉnh linh hoạt băng thông",
      "Giao thức định tuyến gói tin trong mạng quang",
      "Giao thức đóng gói dữ liệu đa năng",
      "Giao thức phát hiện và sửa lỗi gói tin"
    ],
    answer: "Giao thức điều chỉnh linh hoạt băng thông"
  },
  {
    question: "Để thực hiện kết chuỗi ảo (VCAT), chức năng kết chuỗi chỉ cần thực hiện ở thiết bị nào của tuyến?",
    options: [
      "Thiết bị đầu cuối (Path Termination)",
      "Thiết bị trung gian (Intermediate nodes)",
      "Thiết bị lặp (Regenerator)",
      "Tất cả các thiết bị trên tuyến"
    ],
    answer: "Thiết bị đầu cuối (Path Termination)",
    explanation: "Slide chương 2 - Trang 28"
  },
  {
    question: "Các chức năng chính của LCAS là gì?",
    options: [
      "Để quản lý phân bổ băng thông của tuyến VCAT (tăng/giảm dung lượng không gây lỗi)",
      "Để đóng gói các khung Ethernet vào khung SDH",
      "Để định tuyến các luồng dữ liệu quang qua các nút mạng",
      "Để giám sát lỗi bit (BER) trên đường truyền vật lý"
    ],
    answer: "Để quản lý phân bổ băng thông của tuyến VCAT (tăng/giảm dung lượng không gây lỗi)"
  },
  {
    question: "Con trỏ AU-4 có cấu tạo như thế nào?",
    options: [
      "Gồm VC-4 và giá trị con trỏ chỉ vị trí của nó",
      "Gồm VC-3 và byte nhồi",
      "Gồm VC-12 và mào đầu đường",
      "Gồm C-4 và mào đầu đoạn"
    ],
    answer: "Gồm VC-4 và giá trị con trỏ chỉ vị trí của nó"
  },
  {
    question: "Bài toán LTD là",
    options: [
      "Bài toán thiết kế kiến trúc tuyến quang",
      "Bài toán định tuyến bước sóng",
      "Bài toán gán bước sóng",
      "Cả 3 đáp án trên"
    ],
    answer: "Bài toán thiết kế kiến trúc tuyến quang"
  },
  {
    question: "Cấu hình mạng chủ yếu trong ASON là:",
    options: [
      "Mạng vòng",
      "Mạng điểm – điểm",
      "Mạng lưới",
      "Mạng cây"
    ],
    answer: "Mạng lưới"
  },
  {
    question: "Trong những câu dưới đây, câu nào đúng cho dịch vụ hướng kết nối",
    options: [
      "Kết nối giữa hai hoặc nhiều thiết bị trên một mạng cơ bản. Sự khác biệt nằm ở băng thông kết nối và loại mạng cơ bản mà kết nối được hỗ trợ, có ảnh hưởng đáng kể đến các đảm bảo chất lượng dịch vụ được nhà mạng cung cấp",
      "Các gói thuộc một kết nối được coi là các thực thể độc lập và các gói khác nhau có thể có các tuyến truyền khác nhau qua mạng",
      "Cả 2 đáp án A và B",
      "Không đáp án nào đúng"
    ],
    answer: "Kết nối giữa hai hoặc nhiều thiết bị trên một mạng cơ bản. Sự khác biệt nằm ở băng thông kết nối và loại mạng cơ bản mà kết nối được hỗ trợ, có ảnh hưởng đáng kể đến các đảm bảo chất lượng dịch vụ được nhà mạng cung cấp"
  },
  {
    question: "Phát biểu nào sau đây về hệ thống quản mạng (NMS) là đúng",
    options: [
      "Quản lý một hoặc nhiều phẩn tử mạng từ cùng một nhà mạng, đóng vai trò như hệ thống hỗ trợ điều hành OSS, cho các nhìn tổng thể về mạng",
      "Quản lý nhiều phần tử mạng từ các nhà mạng khác nhau, đóng vai trò như hệ thống hỗ trợ điều hành OSS, cho cái nhìn tổng thể về mạng",
      "Quản lý nhiều phần tử mạng từ các nhà mạng khác nhau, sử dụng truyền dữ liệu DCN và kênh báo hiệu nhanh giữa các phần tử, không sử dụng trong mô hình điều khiển xếp chồng.",
      "Không có đáp án đúng"
    ],
    answer: "Quản lý nhiều phần tử mạng từ các nhà mạng khác nhau, đóng vai trò như hệ thống hỗ trợ điều hành OSS, cho cái nhìn tổng thể về mạng"
  },
  {
    question: "Cơ chế bảo vệ nào yêu cầu phải sử dụng giao thức APS để thực thi",
    options: [
      "Cả cơ chế bảo vệ chia sẻ và bảo vệ dành riêng",
      "Cơ chế bảo vệ chia sẻ",
      "Chỉ trong cơ chế bảo vệ chia sẻ 1:N",
      "Cơ chế bảo vệ dành riêng"
    ],
    answer: "Cơ chế bảo vệ chia sẻ"
  },
  {
    question: "Hình vẽ dưới đây biểu diễn cho cơ chế bảo vệ nào",
    image: "./image/cau102.png",
    options: [
      "1:N",
      "1:1",
      "1+1",
      "1+N"
    ],
    answer: "1:N"
  },
  {
    question: "Xét một đường gồm 6 nút được đánh số từ 1 đến 6 liên tiếp... Giả sử cấp phát bước song cho yêu cầu kết nối {4, 5} kết quả nào sau đây là đúng khi gán theo giải thuật Least-Used (LU)",
    options: [
      "Bước sóng thứ 2",
      "Bước sóng thứ nhất",
      "Bước song thứ 3",
      "Cả 3 đáp án trên"
    ],
    answer: "Bước sóng thứ 2"
  },
  {
    question: "Trong các cấu trúc OADM dưới đây, cấu trúc nào không có điều kiện ràng buộc lựa chọn bước sóng xen/rẽ",
    options: [
      "Nối tiếp",
      "Song song",
      "Song song theo băng",
      "Cả 3 đáp án trên"
    ],
    answer: "Song song"
  },
  {
    question: "Chức năng giao thức LMP là",
    options: [
      "Là giao thức mở rộng từ giao thức đã có MPLS, thực hiện điều khiển lưu lượng giữa các LSP...",
      "Là giao thức mới bổ sung trong GMPLS, thực hiện điều khiển lưu lượng giữa các LSP...",
      "Là giao thức mở rộng từ giao thức đã có trong MPLS, hỗ trợ hoạt động quản lý kênh điều khiển và kiểm tra các kết nối trên mạng",
      "Là giao thức mới bổ sung trong GMPLS, thực hiện quản lý và duy trì tình trạng điều khiển và tình trạng truyền tải lưu lượng giữa hai nút kề cận trong mạng GMPLS"
    ],
    answer: "Là giao thức mới bổ sung trong GMPLS, thực hiện quản lý và duy trì tình trạng điều khiển và tình trạng truyền tải lưu lượng giữa hai nút kề cận trong mạng GMPLS"
  },
  {
    question: "Các tiêu chuẩn giao thức mặt phẳng điều khiển cho mạng quang là",
    options: [
      "SNMP",
      "GTP-C, GPT-U",
      "MPLS, LDP",
      "ASON, GMPLS"
    ],
    answer: "ASON, GMPLS"
  },
  {
    question: "Trong quản lý mạng quang, quản lý hiệu năng được hiểu là",
    options: [
      "Giám sát và quản lý các tham số hiệu năng",
      "Phát hiện sự cố và cô lập thành phần lỗi",
      "Điều khiển truy nhập tới các NE, bảo vệ dữ liệu người dùng, xác thực người dung.",
      "Quản lý thiết bị, kết nối, thích ứng ảnh hưởng đến sự thay đổi mạng"
    ],
    answer: "Giám sát và quản lý các tham số hiệu năng"
  },
  {
    question: "Kênh nào sau đây không được khuếch đại bởi các thiết bị khuếch đại đường truyền quang (OLA)",
    options: [
      "Kênh giám sát OSC",
      "Kênh đồng bộ",
      "Kênh tín hiệu thuộc các bước sóng khác nhau",
      "Cả 3 đáp án trên"
    ],
    answer: "Kênh giám sát OSC"
  },
  {
    question: "Trong bài toán RWA của mạng OCS, điều kiện những kết nối chia sẻ chung một sợi quang phải sử dụng những bước sóng khác nhau gọi là:",
    options: [
      "Ràng buộc giới hạn số bước sóng trong mạng quang",
      "Ràng buộc về tính liên tục bước sóng",
      "Ràng buộc về gán kênh riêng biệt",
      "Ràng buộc về tối ưu hóa việc sử dụng tài nguyên mạng"
    ],
    answer: "Ràng buộc về gán kênh riêng biệt",
    explanation: "Ràng buộc về gán kênh riêng biệt (Distinct Wavelength Constraint): Hai kết nối ánh sáng (lightpath) khác nhau nếu đi qua cùng một sợi quang vật lý thì bắt buộc phải được gán các bước sóng khác nhau"
  },
  {
    question: "Khái niệm tuyến quang (lightpath) trong chuyển mạch kênh quang OCS là",
    options: [
      "Chỉ một đường liên kết cáp quang nối liền nút nguồn với nút đuchs thông qua các nút trung gian",
      "Chỉ kênh bước sóng nối nút nguồn với nút đích thông qua các nút trung tâm",
      "Chỉ một tập các đường liên kết các node nối liền nút nguồn với nút đích",
      "Chỉ một tuyến cáp quang nối liền nút nguồn với nút đích thông qua nút trung gian"
    ],
    answer: "Chỉ kênh bước sóng nối nút nguồn với nút đích thông qua các nút trung tâm"
  },
  {
    question: "Cho một mạng truy nhập quang thụ động PON sử dụng splitter có suy hao xen là 13,04 dB... Tính mức dự phòng hệ thống khi yêu cầu mức bù công suất cho bộ thu tại OLT là 3 dB",
    options: [
      "1,86 dB",
      "2,96 dB",
      "1,96 dB",
      "1,83 dB"
    ],
    answer: "1,86 dB"
  },
  {
    question: "Ưu điểm của hệ thống FTTx là:",
    options: [
      "Suy hao thấp, băng thông rộng, tính cách điện",
      "Suy hao thấp, băng thông rộng.",
      "Suy hao thấp, băng thông rộng, tính cách điện, tính bảo mật, không bị can nhiễu điện, từ trường.",
      "Suy hao thấp, băng thông rộng, tính cách điện, tính bảo mật, không bị can nhiễu điện, từ trường, linh hoạt."
    ],
    answer: "Suy hao thấp, băng thông rộng, tính cách điện, tính bảo mật, không bị can nhiễu điện, từ trường, linh hoạt."
  },
  {
    question: "Phạm vi chỉ thị của AU-PTR trong khung AUG là:",
    options: [
      "1 – 782",
      "0 – 782",
      "0 – 783",
      "1 – 783"
    ],
    answer: "0 – 782"
  },
  {
    question: "Hiệu năng liên kết và hiệu năng tín hiệu chủ yếu liên qua đến",
    options: [
      "Khả năng phân phối của tải trọng khách hàng cá nhân cũng như trọng tải tổng hợp tuân thủ các thông số chất lượng dịch vụ Qos mong đợi.",
      "Tăng thông lượng lưu lượng, phát hiện suy giảm hoăc lỗi và hiệu năng tín hiệu đầu cuối- đầu cuối.",
      "Hiệu năng trên lớp mạng, chẳng hạn các lỗi và sự suy giảm các nút và liên kết; chiến lược bảo vệ để loại bỏ hoặc giảm thiểu các điểm nghẽn và trễ lưu lượng.",
      "Tất cả đáp án trên."
    ],
    answer: "Tất cả đáp án trên."
  },
  {
    question: "Ethernet sử dụng các cấu trúc liên kết sau:",
    options: [
      "Điểm điểm, Bus hoặc hình lưới.",
      "Hình sao.",
      "Bus hoặc hình lưới.",
      "Cả 3 đáp án trên."
    ],
    answer: "Cả 3 đáp án trên."
  },
  {
    question: "Trong mạng PON các thành phần tích cực là:",
    options: [
      "OLT (A)",
      "ONU (B)",
      "Coupler (C)",
      "Cả 2 đáp án A và B"
    ],
    answer: "Cả 2 đáp án A và B"
  },
  {
    question: "Trong mạng PON các thành phần thụ động là:",
    options: [
      "OLT",
      "ONU",
      "Coupler/Splitter",
      "Cả 2 đáp án A và B"
    ],
    answer: "Coupler/Splitter"
  },
  {
    question: "Mào đầu đồng bộ khung OTU OH nằm ở đầu trong mào đầu kênh quang (Och OH):",
    options: [
      "Hàng 1, cột 1 – 7",
      "Hàng 1, cột 8 – 14",
      "Hàng 2 – 4, cột 1 – 14",
      "Hàng 1 – 4, cột 15, 16"
    ],
    answer: "Hàng 1, cột 8 – 14"
  },
  {
    question: "Mào đầu đồng bộ khung FA OH nằm ở đầu trong mào đầu kênh quang (Och OH):",
    options: [
      "Hàng 1, cột 1 – 7",
      "Hàng 1, cột 8 – 14",
      "Hàng 2 – 4, cột 1 – 14",
      "Hàng 1 – 4, cột 15, 16"
    ],
    answer: "Hàng 1, cột 1 – 7",
    explanation: "Slide Chương 2"
  },
  {
    question: "Mào đầu đồng bộ khung OPU OH nằm ở đâu trong mào đầu kênh quang (Och OH):",
    options: [
      "Hàng 1, cột 1 – 7",
      "Hàng 1, cột 8 – 14",
      "Hàng 2 – 4, cột 1 – 14",
      "Hàng 1 – 4, cột 15, 16"
    ],
    answer: "Hàng 1 – 4, cột 15, 16"
  },
  {
    question: "Mào đầu đồng bộ khung ODU OH nằm ở đầu trong mào đầu kênh quang (Och OH):",
    options: [
      "Hàng 1, cột 1 – 7",
      "Hàng 1, cột 8 – 14",
      "Hàng 2 – 4, cột 1 – 14",
      "Hàng 1 – 4, cột 15, 16"
    ],
    answer: "Hàng 2 – 4, cột 1 – 14"
  },
  {
    question: "Tải trọng khách hàng nằm ở đâu trong cấu trúc OTN",
    options: [
      "Hàng 1 – 4 cột 3825 – 4080",
      "Hàng 1 – 4 cột 17 – 3824",
      "Hàng 2 – 4, cột 1 – 14",
      "Hàng 1 – 4, cột 15, 16"
    ],
    answer: "Hàng 1 – 4 cột 17 – 3824"
  },
  {
    question: "Trong mạng quang kiến trúc vòng sử dụng cơ chế bảo vệ chia sẻ đoạn ghép/ 2 sợi (MS-SPRing/2) đang hoạt động như hình vẽ dưới đây. Hãy cho biết hoạt động bảo vệ xảy ra tại nút nào khi có sự cố đứt cáp giữa 2 nút 5 và 6",
    image: "./image/cau125.png",
    options: [
      "Tại nút 1 và nút 4 thực hiện chuyển mạch bảo vệ để chuyển lưu lượng hoạt động tại sợi W1 sang phần dung lượng dự phòng tại sợi W2",
      "Tại nút 5 và nút 6 thực hiện chuyển mạch bảo vệ để chuyển lưu lượng hoạt động tại sợi W1 sang phần dung lượng dự phòng tại sợi W2",
      "Tại nút 5 và 6 thực hiện chuyển mạch bảo vệ để chuyển dữ liệu tại sợi hoạt động W1 sang sợi dự phòng W2",
      "Tại nút 1 và nút 4 thực hiện chuyển mạch bảo vệ để chuyển dữ liệu tại sợi hoạt động W1 sang sợi dự phòng W2"
    ],
    answer: "Tại nút 5 và nút 6 thực hiện chuyển mạch bảo vệ để chuyển lưu lượng hoạt động tại sợi W1 sang phần dung lượng dự phòng tại sợi W2"
  },
  {
    question: "Tính tốc độ trường tin PFI trong truyền NG-SDH có tốc độ truyền tải là 2,5 Gb/s",
    options: [
      "8 kb/s",
      "25 kb/s",
      "56 kb/s",
      "12 kb/s"
    ],
    answer: "8 kb/s"
  },
  {
    question: "Tính tốc độ trường tin PTI trong truyền NG-SDH có tốc độ truyền tải là 2,5 Gb/s",
    options: [
      "64 kb/s",
      "56 kb/s",
      "128 kb/s",
      "48 kb/s"
    ],
    answer: "64 kb/s"
  },
  {
    question: "Tại lớp liên kết trong mạng quang được thực hiện tại ?",
    options: [
      "MPLS, Ethernet",
      "Lớp NG-SDH, OTN và các lớp quang",
      "Lớp kênh quang",
      "Lớp IP"
    ],
    answer: "MPLS, Ethernet"
  },
  {
    question: "Phục hồi mạng được tính là ?",
    options: [
      "Thời gian từ khi mạng phát hiện lỗi đến khi bắt đầu thủ tục phục hồi",
      "Thời gian mạng phát hiện lỗi đến khi hoàn tất hoạt động khôi phục cuối",
      "Thời gian mạng phát hiện lỗi đến khi khôi phục hoàn toàn truyền dẫn",
      "Thời gian mạng phát hiện lỗi đến khi tìm ra vị trí lỗi"
    ],
    answer: "Thời gian mạng phát hiện lỗi đến khi khôi phục hoàn toàn truyền dẫn"
  },
  {
    question: "Điều khiển nào được sử dụng trong mạng ASON ?",
    options: [
      "Điều khiển ngang hàng",
      "Mô hình điều khiển tăng cường",
      "Điều khiển xếp chồng",
      "Tất cả các kiểu trên"
    ],
    answer: "Điều khiển xếp chồng"
  },
  {
    question: "Dạng định tuyến trong mạng GMPLS IP/WDM dựa trên các giao thức:",
    options: [
      "GMPLS",
      "IPSEC",
      "OSPF-TE/ISIS-TE",
      "RSVP, RSVP mở rộng"
    ],
    answer: "OSPF-TE/ISIS-TE"
  },
  {
    question: "Dạng báo hiệu trong mạng GMPLS IP/WDM dựa trên các giao thức:",
    options: [
      "GMPLS",
      "IPSEC",
      "OSPF-TE/ISIS-TE",
      "RSVP, RSVP mở rộng LDP"
    ],
    answer: "RSVP, RSVP mở rộng LDP"
  },
  {
    question: "Dữ liệu trong mạng quang được thực hiện tại lớp",
    options: [
      "Lớp ứng dụng",
      "Lớp vật lý, lớp điều khiển mạng",
      "Lớp dữ liệu, lớp thực hiện mạng",
      "Lớp liên kết dữ liệu, lớp điều khiển mạng"
    ],
    answer: "Lớp vật lý, lớp điều khiển mạng"
  },
  {
    question: "Tầng WDM gồm mấy lớp?",
    options: [
      "3",
      "2",
      "1",
      "4"
    ],
    answer: "3",
    explanation: "<br> - Lớp kênh quang (OCh) <br> - Lớp đoạn ghép kênh quang (OMS) <br> - Lớp đoạn truyền dẫn quang (OTS)"
  },
  {
    question: "Giao thức của mặt phẳng dữ liệu là:",
    options: [
      "Quản lý kết nối giám sát hiệu năng và tăng Cường thời gian sống sót của mạng",
      "Truyền tải dữ liệu qua mạng và tăng cường thời gian sống sót của mạng",
      "Quản lý kết nối giám sát hiệu năng",
      "Truyền tải dữ liệu trong mạng"
    ],
    answer: "Truyền tải dữ liệu trong mạng"
  },
  {
    question: "Dịch vụ mạng quang gồm mấy phần chính",
    options: [
      "3",
      "1",
      "2",
      "4"
    ],
    answer: "2",
    explanation: "<br> - Dịch vụ kết nối (Connection-oriented service) <br> - Dịch vụ không kết nối (Connectionless service)"
  },
  {
    question: "Trong quản lý mạng quang quản lý lỗi được hiểu là:",
    options: [
      "Giám sát và quản lý các tham số hiệu năng",
      "Phát hiện sự cố và cô lập thành phần lỗi",
      "Điều khiển chuyên nhập tới các NE, Bảo vệ dữ liệu nội dung xác thực người dùng",
      "Quản lý Thiết bị kết nối Thích ứng đến sự thay đổi mạng"
    ],
    answer: "Phát hiện sự cố và cô lập thành phần lỗi"
  },
  {
    question: "Tiêu chí nào là quan trọng nhất để đánh giá khả năng bảo vệ và phục hồi của mạng quang",
    options: [
      "Thời gian phục hồi mạng nhanh nhất",
      "Lưu lượng chuyển tài bị mất là nhỏ nhất",
      "Hậu quả pháp lý ít nhất",
      "Tổn thất lợi nhuận nhỏ nhất"
    ],
    answer: "Thời gian phục hồi mạng nhanh nhất"
  },
  {
    question: "Kiến trúc mạng quang WDM gồm mấy thành phần chính?",
    options: [
      "2",
      "5",
      "3",
      "4"
    ],
    answer: "3",
    explanation: "<br> - Thiết bị đầu cuối đường quang (OLT)<br> - Thiết bị kết nối chéo quang (OXC) <br> - Thiết bị xen/rẽ quang (OADM) <br> - Thiết bị khuếch đại đường quang (OA) và tái sinh (Reg) <br> - OA là tự chọn, đề bài hỏi thành phần chính thì chỉ có 3"
  },
  {
    question: "Chức năng chính của mặt phẳng quản lý và mặt phẳng điều khiển là",
    options: [
      "Chịu trách nhiệm quản lý kết nối giám sát hiệu năng",
      "Chịu trách nhiệm quản lý kết nối giám sát hiệu năng và tăng cường khả năng sống sót của mạng",
      "Chịu trách nhiệm truyền tải dữ liệu qua mạng và tăng cường khả năng sống sót của mạng",
      "Chịu trách nhiệm truyền tải dữ liệu qua mạng"
    ],
    answer: "Chịu trách nhiệm quản lý kết nối giám sát hiệu năng và tăng cường khả năng sống sót của mạng"
  },
  {
    question: "Các giao diện mạng quang chủ yếu là",
    options: [
      "Giao diện mạng nút",
      "Giao diện liên mạng",
      "Giao diện người dùng mạng",
      "Cả 3"
    ],
    answer: "Cả 3"
  },
  {
    question: "Bảo vệ tại lớp mạng trong mạng Quang được thực hiện tại",
    options: [
      "MPLS,Ethernet",
      "Lớp NG-SDH, OTN và các lớp quang",
      "Lớp kênh quang",
      "Lớp IP"
    ],
    answer: "Lớp IP"
  },
  {
    question: "Các phần tử cơ bản cho liên kết mạng quang là:",
    options: [
      "Bộ ghép kênh xen rẽ quang (OADM)",
      "Bộ kết nối chéo quang (OXC)",
      "Bộ kết nối cuối đường quang (OLT)",
      "Cả 3 đáp án trên"
    ],
    answer: "Cả 3 đáp án trên"
  },
  {
    question: "Giải pháp bảo vệ chủ yếu trong lớp Ethernet là",
    options: [
      "Sử dụng định tuyến động từng chặng",
      "sử dụng giao thức định tuyến nội miền (OSPF hoặc IS - IS) để tìm đường mới và cáp nhật bản định tuyến",
      "Sử dụng giao thức cây mở rộng giao thức cây mở rộng nhanh hoặc giao thức APS cho chuyển mạch bảo vệ tuyến liền mạch bảo vệ cho mạng vòng",
      "Sử dụng giao thức bảo vệ chuyển mạch định tuyến nhanh để tạo đường hầm dự phòng"
    ],
    answer: "Sử dụng giao thức cây mở rộng giao thức cây mở rộng nhanh hoặc giao thức APS cho chuyển mạch bảo vệ tuyến liền mạch bảo vệ cho mạng vòng"
  },
  {
    question: "Mạng quang là gì?",
    options: [
      "Cascade",
      "Một hệ thống truyền tải dữ liệu dựa trên sợi quang",
      "Giữa các tầng đoạn khu vực",
      "All"
    ],
    answer: "Một hệ thống truyền tải dữ liệu dựa trên sợi quang"
  },
  {
    question: "Kiến trúc mạng quang tổng quát là gì?",
    options: [
      "Hệ thống truyền tải sử dụng sợi quang, bộ ghép kênh, và thiết bị đầu cuối",
      "Hệ thống bao gồm các máy chủ và máy trạm kết nối qua Internet",
      "Hệ thống sử dụng vệ tinh và các trạm thu phát sóng mặt đất",
      "Hệ thống cáp đôi dây xoắn và các bộ khuếch đại tín hiệu điện"
    ],
    answer: "Hệ thống truyền tải sử dụng sợi quang, bộ ghép kênh, và thiết bị đầu cuối"
  },
  {
    question: "Trong mạng truyền thông quang có những loại dịch vụ nào?",
    options: [
      "Hướng kết nối và phi kết nối",
      "Dịch vụ thoại và dịch vụ nhắn tin",
      "Dịch vụ thời gian thực và phi thời gian thực",
      "Dịch vụ công cộng và dịch vụ mạng riêng ảo"
    ],
    answer: "Hướng kết nối và phi kết nối"
  },
  {
    question: "Trong mạng truyền thông quang có những kiểu chuyển mạch nào?",
    options: [
      "Chuyển mạch kênh và chuyển mạch gói",
      "Chuyển mạch thông báo và chuyển mạch dòng",
      "Chuyển mạch điện và chuyển mạch cơ khí",
      "Chuyển mạch mềm và chuyển mạch cứng"
    ],
    answer: "Chuyển mạch kênh và chuyển mạch gói"
  },
  {
    question: "Có những giải pháp nào để tăng dung lượng truyền dẫn trên một sợi quang?",
    options: [
      "Tăng tốc độ bit (TDM) và Ghép kênh theo bước sóng (WDM)",
      "Chỉ tăng tốc độ bit bằng phương pháp Ghép kênh phân chia thời gian (TDM)",
      "Chỉ sử dụng phương pháp Ghép kênh theo bước sóng quang (WDM)",
      "Sử dụng nhiều sợi quang song song (SDM) thay vì ghép kênh"
    ],
    answer: "Tăng tốc độ bit (TDM) và Ghép kênh theo bước sóng (WDM)"
  },
  {
    question: "Tại sao phải thực hiện phân lớp mạng?",
    options: [
      "Để đơn giản hóa quản lý và tối ưu hóa hiệu năng",
      "Để tăng chi phí vận hành và bảo dưỡng hệ thống",
      "Để làm phức tạp hóa kiến trúc mạng nhằm tăng tính bảo mật",
      "Để giảm băng thông và tốc độ truyền dẫn không cần thiết"
    ],
    answer: "Để đơn giản hóa quản lý và tối ưu hóa hiệu năng"
  },
  {
    question: "Ý nghĩa của việc phân lớp là gì?",
    options: [
      "Giảm độ phức tạp",
      "Tiêu chuẩn hóa giao diện và thuận tiện module hóa",
      "Đảm bảo kỹ thuật liên mạng và tăng nhanh sự phát triển",
      "Tất cả các đáp án trên"
    ],
    answer: "Tất cả các đáp án trên"
  },
  {
    question: "Mạng quang được phân lớp như thế nào?",
    options: [
      "Lớp vật lý, lớp liên kết, lớp mạng, lớp truyền tải và lớp ứng dụng",
      "Lớp truy nhập, lớp biên, lớp lõi và lớp ứng dụng",
      "Lớp quang, lớp điện, lớp xử lý tín hiệu và lớp người dùng",
      "Lớp 1, Lớp 2, Lớp 3, Lớp 4 và Lớp 5"
    ],
    answer: "Lớp vật lý, lớp liên kết, lớp mạng, lớp truyền tải và lớp ứng dụng"
  },
  {
    question: "Sự phát triển của các mạng truyền tải quang hướng tới mục tiêu gì?",
    options: [
      "Tăng tốc độ và khả năng tương thích",
      "Giảm chi phí và sử dụng cáp đồng",
      "Tập trung vào mạng không dây và vệ tinh",
      "Giảm băng thông để tiết kiệm năng lượng"
    ],
    answer: "Tăng tốc độ và khả năng tương thích"
  },
  {
    question: "Sự phát triển của các công nghệ truy cập quang hiện nay là gì?",
    options: [
      "Sử dụng mạng quang thụ động (PON)",
      "Sử dụng mạng quang chủ động (AON) hoàn toàn",
      "Quay lại sử dụng công nghệ DSL trên cáp đồng",
      "Chỉ sử dụng kết nối điểm - điểm (P2P)"
    ],
    answer: "Sử dụng mạng quang thụ động (PON)",
    explanation: "Slide Chương 6"
  },
  {
    question: "Hiệu năng mạng truyền thông quang bao gồm những loại hiệu năng nào?",
    options: [
      "Hiệu năng lưu lượng, Hiệu năng dịch vụ và Hiệu năng liên kết",
      "Hiệu năng phần cứng, Hiệu năng phần mềm và Hiệu năng người dùng",
      "Hiệu năng quang, Hiệu năng điện và Hiệu năng cơ khí",
      "Hiệu năng phát, Hiệu năng thu và Hiệu năng trung gian"
    ],
    answer: "Hiệu năng lưu lượng, Hiệu năng dịch vụ và Hiệu năng liên kết"
  },
  {
    question: "Hiệu năng mạng truyền thông quang được đánh giá qua những thông số đo hiệu năng nào?",
    options: [
      "Tốc độ, độ trễ và tỷ lệ lỗi bit (BER)",
      "Kích thước, trọng lượng và màu sắc cáp",
      "Điện áp, dòng điện và công suất tiêu thụ",
      "Số lượng node mạng và khoảng cách địa lý"
    ],
    answer: "Tốc độ, độ trễ và tỷ lệ lỗi bit (BER)"
  },
  {
    question: "NG-SDH là gì?",
    options: [
      "Hệ thống truyền dẫn quang tiên tiến dựa trên SDH",
      "Hệ thống mạng không dây thế hệ mới",
      "Giao thức định tuyến IP trên nền quang",
      "Chuẩn mã hóa dữ liệu mới cho mạng LAN"
    ],
    answer: "Hệ thống truyền dẫn quang tiên tiến dựa trên SDH"
  },
  {
    question: "NG-SDH sử dụng những giao thức nào?",
    options: [
      "GFP, VCAT và LCAS",
      "TCP, IP và UDP",
      "MPLS, RSVP và OSPF",
      "ATM, Frame Relay và Ethernet"
    ],
    answer: "GFP, VCAT và LCAS"
  },
  {
    question: "Mô hình mạng quang NG-SDH được tổ chức như thế nào?",
    options: [
      "Mô hình Service - Transport network - Transmission media",
      "Mô hình OSI 7 lớp truyền thống",
      "Mô hình Client - Server - Database",
      "Mô hình TCP/IP 4 lớp"
    ],
    answer: "Mô hình Service - Transport network - Transmission media"
  },
  {
    question: "Cấu trúc ghép kênh mở rộng SDH gồm những thủ tục cơ bản nào?",
    options: [
      "Sắp xếp, chèn, ghép kênh, bổ sung mào đầu và đồng chỉnh",
      "Mã hóa, nén dữ liệu, truyền tải và giải mã",
      "Định tuyến, chuyển mạch, phân phối và kiểm soát lỗi",
      "Lấy mẫu, lượng tử hóa, mã hóa và điều chế"
    ],
    answer: "Sắp xếp, chèn, ghép kênh, bổ sung mào đầu và đồng chỉnh"
  },
  {
    question: "Lớp SDH bao gồm những lớp con nào?",
    options: [
      "Lớp tuyến, lớp đoạn ghép, lớp đoạn lặp, lớp vật lý",
      "Lớp vật lý, lớp liên kết dữ liệu, lớp mạng, lớp ứng dụng",
      "Lớp quang, lớp điện, lớp vô tuyến, lớp vệ tinh",
      "Lớp kênh, lớp truyền dẫn, lớp phân phối, lớp người dùng"
    ],
    answer: "Lớp tuyến, lớp đoạn ghép, lớp đoạn lặp, lớp vật lý",
    explanation: "Slide Chương 2 - Trang 14"
  },
  {
    question: "Dựa trên khoảng cách mục tiêu, lớp vật lý SDH có thể phân loại thành các ứng dụng khác nhau nào?",
    options: [
      "Kết nối nội bộ (A)",
      "Kết nối cự li ngắn, kết nối cự li dài, rất dài và cực dài (B)",
      "Cả A và B đúng",
      "Chỉ kết nối vệ tinh và vi ba (C)"
    ],
    answer: "Cả A và B đúng",
    explanation: "SLide Chương 2 <br> - Kết nối nội bộ (I):Khoảng cách dưới 2km <br> - Kết nối cự li ngắn(S): Khoảng cách ~15km ở bước sóng 1310nm và 40km ở bước sóng 1550nm <br> - Kết nối cự li dài (L): Khoảng cách ~40km ở bước sóng 1310nm và ~80km ở bước sóng 1550nm<br> - Kết nối rất dài (V): Khoảng cách ~60km ở bước sóng 1310nm và 120km ở bước sóng 1550nm <br> - Kết nối cự li cực dài (U): Khoảng cách ~160km "
  },
  {
    question: "Để thực hiện kết chuỗi ảo (VCAT), chức năng kết chuỗi chỉ cần thực hiện ở thiết bị nào của tuyến?",
    options: [
      "Thiết bị đầu cuối",
      "Thiết bị trung gian",
      "Bộ lặp quang (Repeater)",
      "Tất cả các nút mạng"
    ],
    answer: "Thiết bị đầu cuối"
  },
  {
    question: "Các chức năng chính của LCAS là gì?",
    options: [
      "Để quản lý phân bổ băng thông của tuyến VCAT",
      "Để thay đổi bước sóng của tín hiệu quang",
      "Để chuyển đổi tín hiệu từ quang sang điện",
      "Để giám sát lỗi bit trên đường truyền vật lý"
    ],
    answer: "Để quản lý phân bổ băng thông của tuyến VCAT",
    explanation: "Slide Chương 2"
  },
  {
    question: "Cấu tạo của khối AU-4 bao gồm?",
    options: [
      "VC-4 và con trỏ AU-4",
      "VC-3 và mào đầu đường",
      "Container C-4 và mào đầu đoạn",
      "Chỉ bao gồm vùng tải trọng"
    ],
    answer: "VC-4 và con trỏ AU-4",
    explanation: " Trong Chương 1 và 2 <br> - VC-4 (Virtual Container 4) bao gồm Container C-4 và mào đầu đường (POH) <br> - AU-4 (Administrative Unit 4) là đơn vị quản trị được tạo thành bởi VC-4 cộng với con trỏ AU-4 (AU-4 Pointer). Con trỏ này dùng để chỉ vị trí bắt đầu của VC-4 trong khung STM-1."
  },
  {
    question: "Báo hiệu trong mạng quang được thực hiện tại các lớp:",
    options: [
      "Lớp vật lý, lớp điều khiển mạng",
      "Lớp liên kết dữ liệu, lớp điều khiển mạng",
      "Lớp ứng dụng, lớp điều khiển mạng",
      "Cả 3 đáp án trên"
    ],
    answer: "Lớp vật lý, lớp điều khiển mạng"
  },
  {
    question: "Cho mạng quang có 6 nút (A, B, C, D, E và F) với 8 liên kết. Giả sử các yêu cầu kết nối tuyến quang là: {A-B-C}, {A-B-C-E}, {F-E-C}, {B-C-D}, {B-F-E}. Kết quả gán bước sóng nào sau đây là đúng khi các bước sóng được gán theo giải thuật tô màu đồ thị ở lần tô thứ 3:",
    options: [
      "Đỉnh 1: bước sóng 1, Đỉnh 2: bước sóng 2, Đỉnh 5: bước sóng 2",
      "Đỉnh 2: bước sóng 1, Đỉnh 1: bước sóng 2, Đỉnh 5: bước sóng 1",
      "Đỉnh 2: bước sóng 1, Đỉnh 1: bước sóng 2, Đỉnh 3: bước sóng 2",
      "Đỉnh 1: bước sóng 1, Đỉnh 2: bước sóng 2, Đỉnh 3: bước sóng 1"
    ],
    answer: "Đỉnh 1: bước sóng 1, Đỉnh 2: bước sóng 2, Đỉnh 3: bước sóng 1"
  },
  {
    question: "Hoạt động báo hiệu trong mạng GMPLS IP/WDM dựa trên các giao thức:",
    options: [
      "BGP, OBGP",
      "OSPF, IS-IS",
      "LMP",
      "RSVP, RSVP mở rộng, LDP"
    ],
    answer: "RSVP, RSVP mở rộng, LDP"
  },
  {
    question: "Định cỡ mạng quang gồm có mấy mô hình chính:",
    options: [
      "3",
      "2",
      "4",
      "1"
    ],
    answer: "2"
  },
  {
    question: "Trong quản lý mạng quang, quản lý lỗi được hiểu là:",
    options: [
      "Giám sát và quản lý các tham số hiệu năng mạng",
      "Quản lý thiết bị, kết nối, thích ứng ảnh hưởng đến sự thay đổi mạng",
      "Điều khiển truy nhập tới các NE, bảo vệ dữ liệu người dùng, xác thực người dùng",
      "Phát hiện sự cố và cô lập thành phần lỗi"
    ],
    answer: "Phát hiện sự cố và cô lập thành phần lỗi"
  },
  {
    question: "Cho mạng quang có 6 nút (A, B, C, D, E và F) với 8 liên kết. Giả sử các yêu cầu kết nối tuyến quang là: {A-B-C}, {A-B-C-E}, {F-E-C}, {B-C-D}, {B-F-E}. Kết quả gán bước sóng nào sau đây là đúng khi các bước sóng được gán theo giải thuật tô màu đồ thị ở lần tô thứ 4:",
    options: [
      "Đỉnh 2: bước sóng 1, Đỉnh 1: bước sóng 2, Đỉnh 5: bước sóng 2, Đỉnh 3: bước sóng 2",
      "Đỉnh 2: bước sóng 1, Đỉnh 1: bước sóng 2, Đỉnh 3: bước sóng 2, Đỉnh 5: bước sóng 1",
      "Đỉnh 1: bước sóng 1, Đỉnh 2: bước sóng 2, Đỉnh 5: bước sóng 2, Đỉnh 3: bước sóng 1",
      "Đỉnh 1: bước sóng 1, Đỉnh 2: bước sóng 2, Đỉnh 3: bước sóng 1, Đỉnh 5: bước sóng 2"
    ],
    answer: "Đỉnh 2: bước sóng 1, Đỉnh 1: bước sóng 2, Đỉnh 3: bước sóng 2, Đỉnh 5: bước sóng 1"
  },
  {
    question: "Mô hình kết nối mạng IP/WDM bao gồm mấy loại chính:",
    options: [
      "2",
      "1",
      "3",
      "4"
    ],
    answer: "3",
    explanation: "<br>IP/WDM Điểm - điểm <br>IP/WDM Tái cấu hình <br>IP/WDM Chuyển mạch <br>"
  },
  {
    question: "Trong các cấu trúc OADM dưới đây, cấu trúc nào luôn làm tăng suy hao khi xen/rẽ thêm bước sóng:",
    options: [
      "Song song theo băng",
      "Song song",
      "Nối tiếp",
      "Cả 3 đáp án trên"
    ],
    answer: "Nối tiếp"
  },
  {
    question: "Trong các cấu hình OXC sau, cấu hình nào không cho phép thực hiện chuyển đổi bước sóng:",
    options: [
      "Lõi chuyển mạch quang nối trực tiếp đến các bộ ghép/tách kênh bên trong OLT",
      "Lõi chuyển mạch quang nối trực tiếp đến các bộ chuyển đổi tín hiệu trong thiết bị WDM",
      "Lõi chuyển mạch điện",
      "Cả 3 đáp án trên"
    ],
    answer: "Lõi chuyển mạch quang nối trực tiếp đến các bộ ghép/tách kênh bên trong OLT"
  },
  {
    question: "Bài toán RWA là:",
    options: [
      "Bài toán định tuyến và gán bước sóng",
      "Bài toán tối thiểu hóa số kết nối có thể thiết lập",
      "Bài toán thiết kế kiến trúc tuyến quang (Lightpath)",
      "Cả 3 đáp án trên"
    ],
    answer: "Bài toán định tuyến và gán bước sóng"
  },
  {
    question: "Xét một đường gồm 6 nút được đánh số từ 1 đến 6 liên tiếp. Có một số bước sóng đã được gán như sau: w1: (1,3); (5,6); w2: (3,4); w3: (2,3). Giả sử cần cấp phát bước sóng cho yêu cầu kết nối (4,5), kết quả nào sau đây là đúng khi gán theo giải thuật Most-Used (MU):",
    options: [
      "Bước sóng thứ ba (w3)",
      "Bước sóng thứ hai (w2)",
      "Bước sóng thứ nhất (w1)",
      "Cả 3 đáp án trên"
    ],
    answer: "Bước sóng thứ nhất (w1)"
  },
  {
    question: "Trong quản lý mạng quang, quản lý hiệu năng được hiểu là:",
    options: [
      "Điều khiển truy nhập tới các NE, bảo vệ dữ liệu người dùng, xác thực người dùng",
      "Phát hiện sự cố và cô lập thành phần lỗi",
      "Quản lý thiết bị, kết nối, thích ứng ảnh hưởng đến sự thay đổi mạng",
      "Giám sát và quản lý các tham số hiệu năng mạng"
    ],
    answer: "Giám sát và quản lý các tham số hiệu năng mạng"
  },
  {
    question: "Kiến trúc mạng quang WDM gồm có mấy loại chính",
    options: [
      "3",
      "4",
      "2",
      "5"
    ],
    answer: "3",
    explanation: "<br>- Điểm-điểm (cấu hình cố định) <br> - Tái cấu hình (cấu hình chuyển mạch kênh) <br> - Chuyển mạch (cấu hình chuyển mạch gói)."
  },
  {
    question: "Các giao diện mạng quang chủ yếu là:",
    options: [
      "Giao diện người dùng với mạng (UNI)",
      "Giao diện nút với nút (NNI)",
      "Giao diện liên mạng (INI)",
      "Cả 3 đáp án trên"
    ],
    answer: "Cả 3 đáp án trên"
  },
  {
    question: "Chức năng chính của mặt phẳng dữ liệu là:",
    options: [
      "Chịu trách nhiệm về truyền tải dữ liệu qua mạng",
      "Chịu trách nhiệm quản lý kết nối, giám sát hiệu năng và tăng cường khả năng sống sót của mạng",
      "Chịu trách nhiệm quản lý kết nối, giám sát hiệu năng",
      "Chịu trách nhiệm truyền tải dữ liệu qua mạng và tăng cường khả năng sống sót của mạng"
    ],
    answer: "Chịu trách nhiệm về truyền tải dữ liệu qua mạng"
  },
  {
    question: "Trong kiến trúc truyền tải IP/WDM bao gồm mấy lớp (tầng):",
    options: [
      "1",
      "3",
      "2",
      "4"
    ],
    answer: "2",
    explanation: "<br>- Tầng IP <br>- Tầng ATM <br>- Tầng SDH <br>- Tầng WDM <br> ! Có tất cả 4 tầng nhưng chọn đáp án còn tùy theo giai đoạn phát triển: Giai đoạn 1: IP/ATM/SDH/WDM = 4 lớp; Giai đoạn 2: IP/SDH/WDM = 3 lớp; Giai đoạn 3: IP/WDM = 2 lớp. </br> ! Đề không nói gì về giai đoạn thì hiểu là giai đoạn hiện tại là Giai đoạn 3 nên sẽ chọn 2 lớp."
  },
  {
    question: "Mô hình điều khiển nào được sử dụng trong ASON:",
    options: [
      "Mô hình điều khiển ngang hàng (Peer)",
      "Mô hình điều khiển tăng cường (Augmented)",
      "Mô hình điều khiển xếp chồng (Overlay)",
      "Tất cả mô hình trên"
    ],
    answer: "Mô hình điều khiển xếp chồng (Overlay)",
    explanation: "Slide Chương 4 - Trang 17 <br> bonus Giao diện ASON: Giao diện Người sử dụng-Mạng (UNI)"
  },
  {
    question: "Một mạng IP/WDM có thể hỗ trợ mấy mô hình dịch vụ chính:",
    options: [
      "3",
      "2",
      "4",
      "1"
    ],
    answer: "2",
    explanation: "<br>- Mô hình dịch vụ miền <br>- Mô hình dịch vụ hợp nhất"
  },
  {
    question: "Mô hình định cỡ thống kê gồm có mấy mô hình chính:",
    options: [
      "2",
      "1",
      "4",
      "3"
    ],
    answer: "2",
    explanation: "<br>- Mô hình First-passage <br>- Mô hình Blocking"
  },
  {
    question: "Công nghệ mạng WDM bao gồm mấy loại chính:",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: "2" // CWDM (Thưa) và DWDM (Dày).
  },
  {
    question: "Có bao nhiêu cấu hình chính được triển khai trong mạng AON:",
    options: [
      "5",
      "2",
      "3",
      "4"
    ],
    answer: "2",
    explanation: "<br>- Home Run <br>- Active Star"
  },
  {
    question: "Giải pháp chủ yếu bảo vệ trong lớp IP là:",
    options: [
      "Khi mạng gặp sự cố, tất cả các bộ định tuyến có trên mạng được dừng hoạt động để thực hiện cập nhật bảng định tuyến",
      "Khi mạng gặp sự cố, các gói tạm dừng truyền đi cho đến khi định tuyến mới được thực hiện",
      "Sử dụng định tuyến động, từng chặng. Khi mạng gặp sự cố, giao thức định tuyến hoạt động và cập nhật các bảng định tuyến tại mỗi bộ định tuyến",
      "Sử dụng định tuyến tĩnh, thiết lập sẵn tuyến bảo vệ cho tuyến hoạt động"
    ],
    answer: "Sử dụng định tuyến động, từng chặng. Khi mạng gặp sự cố, giao thức định tuyến hoạt động và cập nhật các bảng định tuyến tại mỗi bộ định tuyến",
    explanation:"Slide Chương 5 - Trang 15"
  },
  {
    question: "Có các cơ chế duy trì mạng nào:",
    options: [
      "Tổ hợp (xếp chồng duy trì kết nối và duy trì cascade)",
      "Duy trì cascade (nối tầng giữa các tầng/ đoạn/ khu vực)",
      "Duy trì kết nối đầu cuối - đầu cuối",
      "Cả 3 đáp án trên"
    ],
    answer: "Cả 3 đáp án trên",
    explanation: "Slide Chương 5"
  },
  {
    question: "Hiện tại, mức dự phòng quỹ suy hao khi thiết kế tuyến FTTx không lớn hơn:",
    options: [
      "4 dBm",
      "2 dBm",
      "1 dBm",
      "3 dBm"
    ],
    answer: "3 dBm" // Thường chọn System Margin khoảng 3dB.
  },
  {
    question: "Bộ splitter 1:64 sử dụng cho mạng truy nhập quang thụ động PON có suy hao vượt là 1.5 dB. Tính suy hao xen splitter 1:64 này:",
    options: [
      "19,56 dB",
      "19,06 dB",
      "12,86 dB",
      "12,56 dB"
    ],
    answer: "19,56 dB", // Loss = 10*log(64) + 1.5 = 18.06 + 1.5 = 19.56 dB.
    explanation: "Suy hao lý thuyết của splitter 1:64 là 10*log(64) = 18.06 dB. Cộng thêm suy hao vượt 1.5 dB, tổng suy hao là 19.56 dB."
  },
  {
    question: "Giải pháp bảo vệ chủ yếu trong lớp liên kết Ethernet là:",
    options: [
      "Giao thức cây mở rộng (STP), giao thức cây mở rộng nhanh (RSTP) hoặc giao thức APS cho chuyển mạch bảo vệ và chuyển mạch bảo vệ cho mạng vòng",
      "Sử dụng giao thức định tuyến nội miền (OSPF hoặc IS - IS) để tìm đường mới và cập nhật bản định tuyến",
      "Giao thức chuyển mạch bảo vệ định tuyến nhanh để tạo đường hầm dự phòng",
      "Sử dụng định tuyến động, từng chặng"
    ],
    answer: "Giao thức cây mở rộng (STP), giao thức cây mở rộng nhanh (RSTP) hoặc giao thức APS cho chuyển mạch bảo vệ và chuyển mạch bảo vệ cho mạng vòng"
  },
  {
    question: "Tiêu chí nào là quan trọng nhất để đánh giá khả năng bảo vệ và phục hồi mạng quang:",
    options: [
      "Tổn thất lợi nhuận nhỏ nhất",
      "Thời gian phục hồi mạng nhanh nhất",
      "Lưu lượng truyền tải bị mất là nhỏ nhất",
      "Hậu quả pháp lý ít nhất"
    ],
    answer: "Thời gian phục hồi mạng nhanh nhất" // Thời gian phục hồi (ví dụ < 50ms) là tham số kỹ thuật quan trọng nhất.
  },
  {
    question: "Thời gian phục hồi mạng được tính là:",
    options: [
      "Là khoảng thời gian từ khi mạng phát hiện lỗi đến khi tìm ra vị trí lỗi",
      "Là khoảng thời gian từ khi mạng phát hiện lỗi đến khi hoàn tất hoạt động khôi phục cuối",
      "Là khoảng thời gian từ khi mạng phát hiện lỗi đến khi khôi phục hoàn toàn truyền dẫn",
      "Là khoảng thời gian từ khi mạng phát hiện lỗi đến khi bắt đầu thủ thục phục hồi"
    ],
    answer: "Là khoảng thời gian từ khi mạng phát hiện lỗi đến khi khôi phục hoàn toàn truyền dẫn"
  },
  {
    question: "Kí hiệu nào cho biết mạng hoạt động ở chế độ bảo vệ chia sẻ:",
    options: [
      "1+N",
      "N+N",
      "1:N",
      "1+1"
    ],
    answer: "1:N", // 1+1 là bảo vệ 1-1 (Dedicated), 1:N là bảo vệ chia sẻ (Shared).
    explanation: "1 : N và 1 : 1 được xếp vào loại Shared (Bảo vệ chia sẻ)."
  },
  {
    question: "NG - PON1 có tốc độ hướng lên là:",
    options: [
      "2,5 Gbit/s",
      "2 Gbit/s",
      "5 Gbit/s",
      "1,25 Gbit/s"
    ],
    answer: "2,5 Gbit/s", // XG-PON (NG-PON1): Down 10G / Up 2.5G.
    explanation:"Downstream: 10 Gbit/s; Upstream: 2.5 Gbit/s."
  },
  {
    question: "Nhận định nào sau đây về phương thức FTTC là đúng:",
    options: [
      "Sợi quang được kéo tới cơ quan hoặc hộ gia đình",
      "Sợi được kéo tới một ONU đặt trong tòa nhà",
      "ONT được đặt tại thuê bao",
      "Sợi được kéo tới ONU đặt ở vỉa hè"
    ],
    answer: "Sợi được kéo tới ONU đặt ở vỉa hè"
  },
  {
    question: "Mạng quang thụ động có cấu hình cơ bản sau:",
    options: [
      "Cấu hình Ring",
      "Cấu hình Tree",
      "Cấu hình bus",
      "Cả 3 đáp án trên"
    ],
    answer: "Cả 3 đáp án trên"
  },
  {
    question: "Mô hình tham chiếu mạng truy nhập quang có bao nhiêu điểm tham chiếu:",
    options: [
      "2",
      "5",
      "4",
      "3"
    ],
    answer: "5",
    explanation: "<br> - T <br> - V <br> -a <br> - Q <br> - S"
  },
  {
    question: "Bảo vệ tại lớp liên kết trong mạng quang được thực hiện tại:",
    options: [
      "Lớp MPLS, Ethernet",
      "Lớp kênh quang",
      "Lớp IP",
      "Lớp NG-SDH, OTN và các lớp quang"
    ],
    answer: "Lớp MPLS, Ethernet"
  },
  {
    question: "Bảo vệ tại lớp vật lý trong mạng quang được thực hiện tại:",
    options: [
      "Lớp MPLS, Ethernet",
      "Lớp liên kết dữ liệu",
      "Lớp NG-SDH, OTN và các lớp quang",
      "Lớp IP"
    ],
    answer: "Lớp NG-SDH, OTN và các lớp quang"
  },
  {
    question: "Trong PON, các thiết bị quang thụ động nằm ở đâu:",
    options: [
      "Trong ONU",
      "Trong OLT",
      "Nằm giữa OLT và ONU",
      "Trong AON"
    ],
    answer: "Nằm giữa OLT và ONU"
  },
  {
    question: "Giải pháp bảo vệ chủ yếu trong lớp liên kết MPLS là:",
    options: [
      "Sử dụng giao thức định tuyến nội miền (OSPF hoặc IS-IS) để tìm đường mới và cập nhật bản định tuyến",
      "Giao thức chuyển mạch bảo vệ định tuyến nhanh để tạo đường hầm dự phòng",
      "Giao thức cây mở rộng (STP), giao thức cây mở rộng nhanh (RSTP) hoặc giao thức APS",
      "Sử dụng định tuyến động, từng chặng"
    ],
    answer: "Giao thức chuyển mạch bảo vệ định tuyến nhanh để tạo đường hầm dự phòng"
  },
  {
    question: "Cho một mạng truy nhập quang thụ động PON sử dụng bộ splitter có suy hao xen là 16,25dB. Trên mạng phân phối quang kết nối từ OLT đến ONU sử dụng 4 kết nối connector, suy hao mỗi connector sử dụng kết nối là 0,5 dB, sợi truyền dẫn có hệ số suy hao trung bình 0,4 dB/km tại 1310 nm, suy hao mỗi bộ ghép WDM là 1,5 dB. Biết mức phát tại ONU là 2 dBm, độ nhạy thu tại OLT là -30 dBm với mức bù công suất bộ thu yêu cầu cỡ 2 dB. Tính khoảng cách truyền dẫn tối đa của hệ thống khi yêu cầu đảm bảo mức dự phòng hệ thống là 3 dB.",
    options: [
      "14,375km",
      "15,565km",
      "15,375km",
      "16,565km"
    ],
    answer: "14,375km"
  },
  {
    question: "Mạng thụ động PON bao gồm bao nhiêu thành phần chính:",
    options: [
      "3",
      "4",
      "5",
      "2"
    ],
    answer: "3"
  },
  {
    question: "Cho một mạng truy nhập quang thụ động PON sử dụng bộ splitter có suy hao xen là 13,04dB. Trên mạng phân phối quang kết nối từ OLT đến ONU sử dụng 4 kết nối connector, suy hao mỗi connector sử dụng kết nối là 0,5 dB, sợi truyền dẫn... Biết mức phát tại ONU là 2 dBm, độ nhạy thu tại OLT là -30 dBm, khoảng cách 20km. Tính dự phòng hệ thống khi yêu cầu mức bù công suất cho bộ thu tại OLT là 3 dB.",
    options: [
      "2,96 dB",
      "1,96 dB",
      "1,86 dB",
      "1,83 dB"
    ],
    answer: "2,96 dB"
  },
  {
    question: "Kí hiệu nào cho biết mạng hoạt động ở cơ chế bảo vệ dành riêng:",
    options: [
      "1:N",
      "1:1",
      "N:N",
      "1+1"
    ],
    answer: "1+1",
    explanation: "1 + 1 được xếp vào loại Dedicated (Bảo vệ dành riêng)."
  },
  {
    question: "Khung STM-1 có cấu trúc như thế nào?",
    options: [
      "270 byte x 9 hàng",
      "261 byte x 9 hàng",
      "9 byte x 270 hàng",
      "270 byte x 1 hàng"
    ],
    answer: "270 byte x 9 hàng"
  },
{
    question: "Khi xảy ra chèn dương, các bit I, D con trỏ AU-4 PtR sẽ thay đổi như thế nào?",
    options: [
      "5 bit I đảo dấu",
      "5 bit D đảo dấu",
      "Toàn bộ 10 bit I và D đảo dấu",
      "Các bit I giữ nguyên, chỉ bit D đảo dấu"
    ],
    answer: "5 bit I đảo dấu"
  },
  {
    question: "Cách đánh số địa chỉ các nhóm byte của AUG trong hệ thống SDH được thực hiện như thể nào?",
    options: [
      "Các byte trong AUG được đánh số từ AUG-1 đến AUG-N và được đánh dấu theo thứ tự",
      "Đánh số ngẫu nhiên tùy thuộc vào nhà sản xuất thiết bị",
      "Đánh số theo thứ tự ngược từ N về 1",
      "Chỉ đánh số các byte chẵn, bỏ qua các byte lẻ"
    ],
    answer: "Các byte trong AUG được đánh số từ AUG-1 đến AUG-N và được đánh dấu theo thứ tự"
  },
  {
    question: "Trong mạng NG-SDH sử dụng các thiết bị mới nào?",
    options: [
      "MSPP, MSTP và MSSP",
      "OLT, ONU và Splitter",
      "Router, Switch và Hub",
      "EDFA, ROADM và OXC"
    ],
    answer: "MSPP, MSTP và MSSP"
  },
  {
    question: "MSPP là gì?",
    options: [
      "Nền tảng cung cấp đa dịch vụ (Multi-Service Provisioning Platform)",
      "Nền tảng chuyển mạch gói đa dịch vụ",
      "Nền tảng bảo vệ mạng quang tự động",
      "Nền tảng quản lý phần tử mạng tập trung"
    ],
    answer: "Nền tảng cung cấp đa dịch vụ (Multi-Service Provisioning Platform)"
  },
  {
    question: "MSTP là gì?",
    options: [
      "Nền tảng truyền tải đa dịch vụ (Multi-Service Transport Platform)",
      "Nền tảng kiểm tra giám sát dịch vụ",
      "Giao thức cây bao trùm (Spanning Tree Protocol)",
      "Nền tảng chuyển mạch nhãn đa giao thức"
    ],
    answer: "Nền tảng truyền tải đa dịch vụ (Multi-Service Transport Platform)"
  },
  {
    question: "MSSP là gì?",
    options: [
      "Nền tảng chuyển mạch đa dịch vụ (Multi-Service Switching Platform)",
      "Nền tảng lưu trữ dữ liệu tập trung",
      "Hệ thống bảo mật đa lớp",
      "Giao thức đồng bộ hóa mạng quang"
    ],
    answer: "Nền tảng chuyển mạch đa dịch vụ (Multi-Service Switching Platform)"
  },
  {
    question: "OTN là gì?",
    options: [
      "Là mạng hướng kết nối gồm một tập mạng quang được kết nối bởi liên kết sợi quang",
      "Là mạng chuyển mạch gói dựa trên giao thức IP",
      "Là mạng truy nhập không dây băng rộng",
      "Là mạng cục bộ sử dụng cáp đồng trục"
    ],
    answer: "Là mạng hướng kết nối gồm một tập mạng quang được kết nối bởi liên kết sợi quang",
    explanation: "OTN (Optical Transport Network) là mạng hướng kết nối gồm một tập các phần tử mạng quang được kết nối bởi các liên kết sợi quang, cung cấp khả năng truyền tải, ghép kênh quang, định tuyến, quản lý, giám sát hiệu năng và khôi phục lỗi của các kênh quang mang dữ liệu người dùng."
  },
  {
    question: "Ưu điểm của OTN so với công nghệ NG-SDH hiện tại là gì?",
    options: [
      "Khả năng phát hiện và sửa lỗi hiệu quả, nhiều mức giám sát kết nối Tandem",
      "Chi phí triển khai thấp hơn và không cần thiết bị quang",
      "Tốc độ truyền dẫn thấp hơn nhưng ổn định hơn",
      "Chỉ hỗ trợ duy nhất giao thức Ethernet"
    ],
    answer: "Khả năng phát hiện và sửa lỗi hiệu quả, nhiều mức giám sát kết nối Tandem"
  },
  {
    question: "Phân cấp OTN theo miền điện bao gồm những lớp nào?",
    options: [
      "OPU, ODU, OTU",
      "OTS, OMS, OCh",
      "VC-12, VC-3, VC-4",
      "MPLS, IP, Ethernet"
    ],
    answer: "OPU, ODU, OTU",
    explanation: "OTN được phân cấp theo hai miền chính: Miền quang và Miền điện. <br>- Trong miền điện, OTN bao gồm ba lớp chính: Lớp OPU, Lớp ODU và Lớp OTU. <br>- Trong miền quang, OTN bao gồm ba lớp chính: Lớp OTS, Lớp OMS và Lớp OCh."
  },
  {
    question: "Phân cấp OTN theo miền quang bao gồm những lớp nào?",
    options: [
      "OTS, OMS, OCh",
      "OPU, ODU, OTU",
      "Physical, Data Link, Network",
      "Regenerator, Multiplexer, Path"
    ],
    answer: "OTS, OMS, OCh"
  },
  {
    question: "Nhận định nào sau đây là đúng về chức năng của lớp OTS?",
    options: [
      "Quản lý các phân đoạn liên kết sợi quang giữa các phần tử quang như giữa các bộ khuếch đại quang hoặc các bộ khuếch đại quang và các bộ ghép kênh WDM",
      "Quản lý luồng dữ liệu khách hàng và đóng gói vào khung",
      "Quản lý việc định tuyến bước sóng trong toàn mạng",
      "Giám sát lỗi bit của tín hiệu điện trước khi chuyển đổi quang"
    ],
    answer: "Quản lý các phân đoạn liên kết sợi quang giữa các phần tử quang như giữa các bộ khuếch đại quang hoặc các bộ khuếch đại quang và các bộ ghép kênh WDM"
  },
  {
    question: "Nhận định nào sau đây là đúng về chức năng của lớp OMS?",
    options: [
      "Quản lý các liên kết sợi quang giữa các bộ ghép kênh và bộ chuyển mạch quang",
      "Quản lý kết nối vật lý của từng sợi quang đơn lẻ",
      "Điều khiển việc sửa lỗi hướng thuận (FEC)",
      "Thực hiện chức năng chuyển mạch gói tin IP"
    ],
    answer: "Quản lý các liên kết sợi quang giữa các bộ ghép kênh và bộ chuyển mạch quang"
  },
  {
    question: "Nhận định nào sau đây là đúng về chức năng của lớp OCh?",
    options: [
      "Quản lý các kết nối giữa các bộ lặp 3R (ví dụ: các tuyến quang)",
      "Quản lý phần mào đầu của khung Ethernet",
      "Giám sát nhiệt độ của sợi cáp quang",
      "Quản lý việc cấp phát địa chỉ IP cho thiết bị"
    ],
    answer: "Quản lý các kết nối giữa các bộ lặp 3R (ví dụ: các tuyến quang)"
  },
  {
    question: "Chức năng của lớp OTU là gì?",
    options: [
      "Cung cấp các kết nối quang giữa các bộ lặp 3R, cung cấp nhận dạng kết nối quang, giám sát hiệu năng BER",
      "Đóng gói dữ liệu người dùng vào các container ảo",
      "Định tuyến các gói tin dựa trên địa chỉ MAC",
      "Thực hiện khuếch đại tín hiệu quang quang học"
    ],
    answer: "Cung cấp các kết nối quang giữa các bộ lặp 3R, cung cấp nhận dạng kết nối quang, giám sát hiệu năng BER"
  },
  {
    question: "Chức năng của lớp ODU là gì?",
    options: [
      "Hỗ trợ giám sát kết nối cung cấp nhận dạng, giám sát hiệu năng BER, truyền các chỉ thị báo cảnh và cung cấp các kênh truyền thông đến các điểm kết cuối",
      "Chuyển đổi tín hiệu quang sang tín hiệu điện",
      "Thiết lập các đường hầm VPN trên mạng",
      "Quản lý công suất phát của laser"
    ],
    answer: "Hỗ trợ giám sát kết nối cung cấp nhận dạng, giám sát hiệu năng BER, truyền các chỉ thị báo cảnh và cung cấp các kênh truyền thông đến các điểm kết cuối"
  },
  {
    question: "Chức năng của lớp OPU là gì?",
    options: [
      "Điều chỉnh các tín hiệu khách hàng với các khung OTN (là lớp con của ODU)",
      "Thực hiện sửa lỗi hướng thuận FEC cho toàn bộ khung",
      "Quản lý việc ghép bước sóng WDM",
      "Giám sát lỗi đường truyền vật lý"
    ],
    answer: "Điều chỉnh các tín hiệu khách hàng với các khung OTN (là lớp con của ODU)"
  },
  {
    question: "Cấu trúc khung kênh quang OTN bao gồm những phần chính nào?",
    options: [
      "Mào đầu kênh quang (OCh OH), Tải trọng khách hàng (Client) và Sửa lỗi hướng thuận FEC",
      "Chỉ bao gồm phần tải trọng dữ liệu (Payload)",
      "Mào đầu IP, dữ liệu TCP và phần kiểm tra lỗi CRC",
      "Preamble, địa chỉ MAC nguồn/đích và dữ liệu"
    ],
    answer: "Mào đầu kênh quang (OCh OH), Tải trọng khách hàng (Client) và Sửa lỗi hướng thuận FEC"
  },
  {
    question: "Khung OPU-k có cấu trúc như thế nào?",
    options: [
      "Bao gồm các phần: Tiêu đề OPU-k , tải tin người dùng",
      "Bao gồm: FAS, MFAS và FEC",
      "Bao gồm: Tiêu đề ODU, Tiêu đề OTU và Payload",
      "Chỉ bao gồm phần sửa lỗi FEC"
    ],
    answer: "Bao gồm các phần: Tiêu đề OPU-k , tải tin người dùng"
  },
  {
    question: "Khung OTU-k có cấu trúc như thế nào?",
    options: [
      "Bao gồm các phần: FAS/MFAS, Tiêu đề OTU-k, Tiêu đề ODU-k, tiêu đề OPU-k, tải tin người dùng, FEC",
      "Chỉ bao gồm tải tin người dùng và FEC",
      "Bao gồm tiêu đề OPU-k và tải tin người dùng",
      "Bao gồm mào đầu đoạn và mào đầu đường"
    ],
    answer: "Bao gồm các phần: FAS/MFAS, Tiêu đề OTU-k, Tiêu đề ODU-k, tiêu đề OPU-k, tải tin người dùng, FEC"
  },
  {
    question: "Có bao nhiêu cách để tăng dung lượng truyền dẫn trên 1 sợi quang?",
    options: [
      "2",
      "5",
      "10",
      "1"
    ],
    answer: "2",
    explanation: " Tăng tốc độ bit (TDM) và Ghép kênh theo bước sóng (WDM)"
  },
  {
    question: "10 bit giá trị con trỏ AU-4 khi không chèn là 0100111000. Tìm cấu trúc 10 bit giá trị con trỏ trong khung liền sau khi chèn dương:",
    options: [
      "1110010010",
      "0000000000",
      "1111111111",
      "0100111001"
    ],
    answer: "1110010010"
  },
  {
    question: "10 bit giá trị con trỏ AU-4 khi không chèn là 0100111000. Tìm cấu trúc 10 bít giá trị con trỏ trong khung liền sau khung chèn âm:",
    options: [
      "0100110111",
      "1110011111",
      "1010101010",
      "0011001100"
    ],
    answer: "0100110111"
  },
  {
    question: "Nhận định nào sau đây là đúng về cấu trúc khung OPU-k:",
    options: [
      "4 dòng x 3810 cột",
      "4 dòng x 4080 cột",
      "4 dòng x 3824 cột",
      "9 dòng x 270 cột"
    ],
    answer: "4 dòng x 3810 cột"
  },
  {
    question: "Nhận định nào sau đây là đúng về cấu trúc khung ODU-k:",
    options: [
      "4 dòng x 3824 cột",
      "4 dòng x 3810 cột",
      "4 dòng x 4080 cột",
      "9 dòng x 261 cột"
    ],
    answer: "4 dòng x 3824 cột"
  },
  {
    question: "Những chức năng của điều khiển mạng quang bao gồm:",
    options: [
      "Quản lý hiệu năng, quản lý lỗi, quản lý cấu hình (A)",
      "Quản lý bảo mật và quản lý cước (B)",
      "Chỉ bao gồm quản lý định tuyến và bước sóng (C)",
      "Cả A và B"
    ],
    answer: "Cả A và B"
  },
  {
    question: "Chức năng quản lý hiệu năng trong mạng quang liên quan đến việc gì?",
    options: [
      "Giám sát và quản lý tham số để đo hiệu năng mạng",
      "Tính toán chi phí lắp đặt thiết bị",
      "Cấp quyền truy cập cho người dùng mới",
      "Sửa chữa vật lý các mối hàn cáp quang"
    ],
    answer: "Giám sát và quản lý tham số để đo hiệu năng mạng"
  },
  {
    question: "Chức năng quản lý lỗi trong mạng quang có nhiệm vụ gì?",
    options: [
      "Phát hiện các lỗi xảy ra và cô lập thành phần bị lỗi",
      "Tự động nâng cấp băng thông khi nghẽn mạng",
      "Mã hóa dữ liệu người dùng để tránh lỗi bit",
      "Lập hóa đơn thanh toán cước phí hàng tháng"
    ],
    answer: "Phát hiện các lỗi xảy ra và cô lập thành phần bị lỗi"
  },
  {
    question: "Chức năng quản lý cấu hình trong mạng quang liên quan đến gì?",
    options: [
      "Quản lý các thay đổi có trật tự trong mạng (thiết bị, kết nối)",
      "Giám sát nhiệt độ phòng máy chủ",
      "Quản lý nhân sự vận hành mạng",
      "Kiểm tra chất lượng tín hiệu quang theo thời gian thực"
    ],
    answer: "Quản lý các thay đổi có trật tự trong mạng (thiết bị, kết nối)"
  },
  {
    question: "Chức năng quản lý bảo mật trong mạng quang có mục đích gì?",
    options: [
      "Xác thực người dùng và thiết lập quyền cho mỗi người dùng",
      "Bảo vệ thiết bị khỏi bụi bẩn và độ ẩm",
      "Định tuyến lại gói tin khi đứt cáp",
      "Tăng tốc độ truyền dẫn dữ liệu"
    ],
    answer: "Xác thực người dùng và thiết lập quyền cho mỗi người dùng"
  },
  {
    question: "Chức năng quản lý cước trong mạng quang có nhiệm vụ gì?",
    options: [
      "Lập hóa đơn và theo dõi lịch sử lâu dài của các thành phần mạng",
      "Thanh toán tiền điện cho trạm phát sóng",
      "Quản lý ngân sách đầu tư thiết bị mới",
      "Tính toán suy hao quang trên đường truyền"
    ],
    answer: "Lập hóa đơn và theo dõi lịch sử lâu dài của các thành phần mạng"
  },
  {
    question: "Quản lý bảo mật trong mạng quang giúp gì cho hệ thống?",
    options: [
      "Đảm bảo an toàn dữ liệu và xác thực người dùng",
      "Tăng cường độ lợi của bộ khuếch đại quang",
      "Giảm thiểu độ trễ truyền dẫn",
      "Tự động sao lưu dữ liệu cấu hình"
    ],
    answer: "Đảm bảo an toàn dữ liệu và xác thực người dùng"
  },
  {
    question: "Có các mô hình điều khiển nào trong mạng quang?",
    options: [
      "Xếp chồng (Overlay)",
      "Tăng cường (Augmented)",
      "Ngang hàng (Peer-to-Peer)",
      "Cả 3 đáp án trên"
    ],
    answer: "Cả 3 đáp án trên"
  },
  {
    question: "Trong mạng quang có những công nghệ điều khiển nào?",
    options: [
      "ASON, GMPLS",
      "TCP/IP, UDP",
      "OSPF, BGP",
      "Ethernet, Wi-Fi"
    ],
    answer: "ASON, GMPLS"
  },
  {
    question: "Thuật ngữ 'Duy trì mạng quang' (Network Survivability) là gì?",
    options: [
      "Khả năng bảo đảm an toàn của một mạng với một mức độ truy cập dịch vụ cho phép khi mạng bị sự cố",
      "Khả năng mạng hoạt động mãi mãi không bao giờ hỏng",
      "Khả năng tự động thay thế thiết bị phần cứng khi cũ",
      "Khả năng duy trì tốc độ mạng ổn định khi không có người dùng"
    ],
    answer: "Khả năng bảo đảm an toàn của một mạng với một mức độ truy cập dịch vụ cho phép khi mạng bị sự cố"
  },
  {
    question: "Để việc duy trì mạng quang đạt hiệu quả tốt nhất, giai đoạn nào cần được quan tâm nhất?",
    options: [
      "Giai đoạn thiết kế và phát triển mạng quang",
      "Giai đoạn thi công lắp đặt",
      "Giai đoạn vận hành khai thác",
      "Giai đoạn thanh lý thiết bị"
    ],
    answer: "Giai đoạn thiết kế và phát triển mạng quang"
  },
  {
    question: "Trong cơ chế bảo vệ mạng quang, cơ chế bảo vệ nào yêu cầu 50% dung lượng mạng được lưu trữ cho bảo vệ?",
    options: [
      "Bảo vệ dành riêng (Dedicated Protection)",
      "Bảo vệ chia sẻ (Shared Protection)",
      "Bảo vệ mạng lưới (Mesh Restoration)",
      "Bảo vệ đường dẫn (Path Protection)"
    ],
    answer: "Bảo vệ dành riêng (Dedicated Protection)"
  },
  {
    question: "Cơ chế bảo vệ nào trong mạng quang có một phần dung lượng cho việc bảo vệ (thay vì toàn bộ)?",
    options: [
      "Bảo vệ chia sẻ",
      "Bảo vệ dành riêng",
      "Bảo vệ 1+1",
      "Không có cơ chế nào"
    ],
    answer: "Bảo vệ chia sẻ",
    explanation: "Bảo vệ chia sẻ (Shared Protection) chỉ yêu cầu một phần dung lượng mạng được lưu trữ cho bảo vệ, trong khi bảo vệ dành riêng (Dedicated Protection) yêu cầu 50% dung lượng mạng được lưu trữ cho bảo vệ."
  },
  {
    question: "Giao thức APS được kích hoạt khi nào?",
    options: [
      "Khi có sự cố mạng, phản ứng với các cảnh báo như LOS, LOF, LOP",
      "Khi mạng hoạt động bình thường để kiểm tra định kỳ",
      "Khi thêm một thuê bao mới vào mạng",
      "Khi khởi động lại thiết bị OLT"
    ],
    answer: "Khi có sự cố mạng, phản ứng với các cảnh báo như LOS, LOF, LOP"
  },
  {
    question: "Cơ chế bảo vệ 1+1 trong liên kết điểm-điểm có đặc điểm gì?",
    options: [
      "Không yêu cầu giao thức báo hiệu giữa hai đầu",
      "Yêu cầu giao thức APS phức tạp",
      "Chỉ sử dụng được khi có 3 sợi quang trở lên",
      "Có thời gian chuyển mạch lâu hơn 1 phút"
    ],
    answer: "Không yêu cầu giao thức báo hiệu giữa hai đầu"
  },
  {
    question: "Giải pháp bảo vệ trong lớp liên kết IP sử dụng giao thức nào khi có sự cố?",
    options: [
      "Giao thức OSPF hoặc IS-IS cập nhật các bảng định tuyến",
      "Giao thức ARP để tìm địa chỉ MAC",
      "Giao thức DHCP để cấp lại IP",
      "Giao thức ICMP để báo lỗi"
    ],
    answer: "Giao thức OSPF hoặc IS-IS cập nhật các bảng định tuyến"
  },
  {
    question: "Trong mạng Ethernet, giải pháp bảo vệ nào được sử dụng để bảo vệ liên kết?",
    options: [
      "Giao thức STP và Ethernet Ring Protection (ERP)",
      "Giao thức CSMA/CD",
      "Giao thức Token Ring",
      "Giao thức Frame Relay"
    ],
    answer: "Giao thức STP và Ethernet Ring Protection (ERP)"
  },
  {
    question: "Giải pháp bảo vệ trong MPLS đảm bảo thời gian bảo vệ là bao lâu?",
    options: [
      "60ms",
      "100ms",
      "1s",
      "5ms"
    ],
    answer: "60ms"
  },
  {
    question: "Khi có sự cố đứt cáp giữa hai nút trong mạng vòng RING, hoạt động bảo vệ xảy ra như thế nào?",
    options: [
      "Giao thức APS sẽ kích hoạt để chuyển lưu lượng từ sợi làm việc sang dự phòng",
      "Toàn bộ mạng sẽ ngừng hoạt động chờ sửa chữa",
      "Dữ liệu sẽ được chuyển sang mạng không dây 4G",
      "Người quản trị phải chuyển mạch thủ công tại trạm"
    ],
    answer: "Giao thức APS sẽ kích hoạt để chuyển lưu lượng từ sợi làm việc sang dự phòng"
  },
  {
    question: "FTTx là gì?",
    options: [
      "Là một hình thức truy nhập trong mạng sợi quang, để đưa dịch vụ tới khách hàng",
      "Là công nghệ truyền hình vệ tinh",
      "Là chuẩn kết nối mạng LAN không dây",
      "Là thiết bị đo kiểm cáp quang"
    ],
    answer: "Là một hình thức truy nhập trong mạng sợi quang, để đưa dịch vụ tới khách hàng"
  },
  {
    question: "FTTx bao gồm những hệ thống truy nhập nào?",
    options: [
      "FTTC, FTTB, FTTH, FTTO",
      "LAN, MAN, WAN, PAN",
      "GSM, 3G, 4G, 5G",
      "ADSL, VDSL, Dial-up"
    ],
    answer: "FTTC, FTTB, FTTH, FTTO"
  },
  {
    question: "Ưu điểm của FTTx là gì?",
    options: [
      "Dung lượng lớn, Độ tin cậy cao và dễ bảo dưỡng",
      "Cự ly đoạn lặp dài, Tính cách điện tốt",
      "Tính bảo mật cao, tính linh hoạt lớn, tính mở rộng cao",
      "Cả 3 đáp án trên đều đúng"
    ],
    answer: "Cả 3 đáp án trên đều đúng"
  },
  {
    question: "Nhược điểm của FTTx là gì?",
    options: [
      "Chi phí lắp đặt, bảo dưỡng, thiết bị đầu cuối lớn (1)",
      "Thiết bị đầu cuối còn đắt nên không phải lúc nào cũng phù hợp (2)",
      "Tốc độ truyền dẫn thấp hơn cáp đồng (3)",
      "(1), (2) đều đúng"
    ],
    answer: "(1), (2) đều đúng",
    explanation: "Slide Chương 6 - Trang 6, 12"
  },
  {
    question: "Các ứng dụng của FTTx là gì?",
    options: [
      "Home Run, AON, PON",
      "Mesh Wi-Fi, Hotspot",
      "Point-to-Point Wireless",
      "Satellite Link"
    ],
    answer: "Home Run, AON, PON"
  },
  {
    question: "Cấu hình tham chiếu của mạng truy nhập quang FTTx là gì?",
    options: [
      "Mạng quang từ OLT đến ONU hoặc ONT",
      "Kết nối từ Router đến Switch",
      "Kết nối từ trạm BTS đến điện thoại di động",
      "Mạng nội bộ giữa các máy tính trong văn phòng"
    ],
    answer: "Mạng quang từ OLT đến ONU hoặc ONT"
  },
  {
    question: "Đặc điểm của khối chức năng OLT trong mạng FTTx là gì?",
    options: [
      "Quản lý báo hiệu và thông tin giám sát từ ONU, cung cấp chức năng bảo dưỡng (A)",
      "Cung cấp giao diện quang phía mạng với ODN và giao diện phía mạng dịch vụ (B)",
      "Chỉ có chức năng cấp nguồn cho hệ thống (C)",
      "Cả A và B đều đúng"
    ],
    answer: "Cả A và B đều đúng"
  },
  {
    question: "Cấu trúc của khối chức năng OLT trong mạng FTTx gồm:",
    options: [
      "Khối thích ứng dịch vụ (A)",
      "Khối kết nối chéo, MAC và Lớp PMD (B)",
      "Chỉ bao gồm khối nguồn và vỏ máy (C)",
      "Cả A và B đều đúng"
    ],
    answer: "Cả A và B đều đúng"
  },
  {
    question: "Đặc điểm của khối chức năng ONU trong mạng FTTx là gì?",
    options: [
      "Có giao diện quang phía mạng và giao diện điện phía thuê bao",
      "Biến đổi quang/điện, xử lý và quản lý bảo dưỡng tín hiệu điện",
      "Có thể đặt ở phía khách hàng (FTTH/B) hoặc ngoài trời (FTTC)",
      "Tất cả các đáp án trên"
    ],
    answer: "Tất cả các đáp án trên"
  },
  {
    question: "Cấu trúc của khối chức năng ONU trong mạng FTTx bao gồm:",
    options: [
      "Khối thích ứng dịch vụ (Service adaptation)",
      "Khối MUX/DEMUX (Ghép kênh)",
      "Lớp MAC, lớp PMD, UNI",
      "Tất cả các đáp án trên"
    ],
    answer: "Tất cả các đáp án trên"
  },
  {
    question: "Đặc điểm của phương thức FTTC (Fiber To The Curb) là gì:",
    options: [
      "Phương thức FTTC được khuyến nghị sử dụng cho các vùng dân cư có mật độ dân tương đối cao",
      "Là một phương thức truy nhập phù hợp cho các khách hàng có nhu cầu đối với các dịch vụ VolP, truy nhập internet tốc độ cao",
      "Với phương thức FTTC, sợi được kéo tới ONU đặt ở via hè",
      "Tất cả các đáp án trên"
    ],
    answer: "Tất cả các đáp án trên"
  },
  {
    question: "Đặc điểm phương thức FTTB là gì?",
    options: [
      "Sợi được kéo tới một ONU đặt trong tòa nhà (< 20km). (A)",
      "Sử dụng cáp đồng từ tòa nhà đến từng hộ (thường < 10m). (B)",
      "Khách hàng truy nhập Internet kết nối đến ONU thông qua mạng LAN. (C)",
      "Cả A và B"
    ],
    answer: "Cả A và B"
  },
  {
    question: "Đặc điểm phương thức FTTH/FTTO là gì?",
    options: [
      "Sợi quang được kéo tới cơ quan hoặc hộ gia đình, trong đó một ONT được đặt tại thuê bao",
      "Sợi quang chỉ kéo đến tủ cáp ngoài đường, sau đó dùng cáp đồng.",
      "Sử dụng hoàn toàn cáp đồng từ tổng đài đến thuê bao.",
      "Sử dụng sóng vô tuyến để kết nối."
    ],
    answer: "Sợi quang được kéo tới cơ quan hoặc hộ gia đình, trong đó một ONT được đặt tại thuê bao"
  },
  {
    question: "Công nghệ truy nhập quang tích cực AON là gì?",
    options: [
      "Mạng sử dụng các bộ chia quang thụ động không cần nguồn điện.",
      "Mạng truy nhập quang để phân phối tín hiệu sử dụng các thiết bị cần nguồn cung cấp",
      "Mạng chỉ sử dụng kết nối vô tuyến.",
      "Mạng sử dụng cáp đồng trục."
    ],
    answer: "Mạng truy nhập quang để phân phối tín hiệu sử dụng các thiết bị cần nguồn cung cấp"
  },
  {
    question: "Các cấu hình triển khai AON là gì?",
    options: [
      "Các cấu hình kết nối điểm - điểm gồm 2 cấu hình chính là kiến trúc Home Run và Active Star Ethernet",
      "Cấu hình Ring và Bus sử dụng Splitter.",
      "Cấu hình điểm - đa điểm sử dụng bộ chia quang.",
      "Cấu hình Mesh lưới."
    ],
    answer: "Các cấu hình kết nối điểm - điểm gồm 2 cấu hình chính là kiến trúc Home Run và Active Star Ethernet"
  },
  {
    question: "Công nghệ truy nhập quang thụ động PON là gì?",
    options: [
      "Là một kiến trúc mạng điểm-đa điểm, sử dụng các bộ chia quang thụ động (không có nguồn cung cấp)",
      "Là kiến trúc mạng điểm-điểm sử dụng Switch điện.",
      "Là mạng sử dụng các thiết bị khuếch đại quang cần nguồn điện.",
      "Là công nghệ sử dụng sóng Viba."
    ],
    answer: "Là một kiến trúc mạng điểm-đa điểm, sử dụng các bộ chia quang thụ động (không có nguồn cung cấp)"
  },
  {
    question: "Các cấu hình triển khai PON là gì?",
    options: [
      "Chỉ có cấu hình Star (Hình sao).",
      "Cấu hình Mesh và Fully Connected.",
      "Cấu hình Ring, cấu hình Tree, cấu hình Bus",
      "Cấu hình Home Run."
    ],
    answer: "Cấu hình Ring, cấu hình Tree, cấu hình Bus"
  },
  {
    question: "Các chuẩn về PON là gì?",
    options: [
      "Ethernet, Token Ring và FDDI.",
      "Các chuẩn GPON, EPON, BPON và WDM PON",
      "WiFi 6, 4G LTE và 5G.",
      "SONET/SDH và ATM."
    ],
    answer: "Các chuẩn GPON, EPON, BPON và WDM PON",
    explanation: "Slide Chương 6 - Trang 24, 25"
  },
  {
    question: "Yêu cầu quan trọng cần thiết cho việc phân tích tuyến FTTx là gì?",
    options: [
      "Khoảng cách truyền dẫn và tốc độ dữ liệu.",
      "Số lượng bộ chia quang và số lượng kênh bước sóng.",
      "Tỉ lệ lỗi bit (BER) và quỹ suy hao quang.",
      "Tất cả các yếu tố trên"
    ],
    answer: "Tất cả các yếu tố trên"
  },
  {
    question: "Yêu cầu về 'Khoảng cách truyền dẫn' trong phân tích tuyến FTTx liên quan đến yếu tố nào?",
    options: [
      "Số lượng thuê bao tối đa của hệ thống.",
      "Sự suy giảm tín hiệu khi truyền qua quang.",
      "Độ bảo mật của dữ liệu đường truyền.",
      "Loại mã hóa tín hiệu được sử dụng."
    ],
    answer: "Sự suy giảm tín hiệu khi truyền qua quang."
  },
  {
    question: "Tốc độ dữ liệu hoặc băng thông kênh truyền trong phân tích tuyến FTTx có vai trò gì?",
    options: [
      "Xác định dung lượng của tuyến truyền tải",
      "Xác định độ bền vật lý của cáp quang.",
      "Quyết định vị trí đặt OLT.",
      "Tính toán chi phí lắp đặt."
    ],
    answer: "Xác định dung lượng của tuyến truyền tải"
  },
  {
    question: "Tỉ lệ lỗi bit (BER) trong phân tích tuyến FTTx ảnh hưởng như thế nào đến mạng?",
    options: [
      "Ảnh hưởng đến tốc độ thi công mạng.",
      "Ảnh hưởng đến sự chính xác của dữ liệu truyền qua mạng",
      "Quyết định số lượng Splitter cần dùng.",
      "Không ảnh hưởng gì đến chất lượng dịch vụ."
    ],
    answer: "Ảnh hưởng đến sự chính xác của dữ liệu truyền qua mạng"
  },
  {
    question: "Quỹ suy hao quang trong phân tích tuyến FTTx liên quan đến yếu tố nào?",
    options: [
      "Sự suy giảm tín hiệu quang trong quá trình truyền tải",
      "Sự gia tăng công suất do bộ khuếch đại.",
      "Tốc độ xử lý của chip tại ONU.",
      "Giao thức đóng gói dữ liệu."
    ],
    answer: "Sự suy giảm tín hiệu quang trong quá trình truyền tải"
  },
  {
    question: "Mức độ dự phòng công suất quang mong muốn trong phân tích tuyến FTTx có tác dụng gì?",
    options: [
      "Đảm bảo công suất truyền tải khi có sự cố",
      "Tăng băng thông cho người dùng VIP.",
      "Giảm tiêu thụ điện năng của thiết bị.",
      "Tự động ngắt kết nối khi không sử dụng."
    ],
    answer: "Đảm bảo công suất truyền tải khi có sự cố"
  },
  {
    question: "Các mức bù công suất do các yếu tố suy giảm hệ thống khác nhau có vai trò gì trong phân tích tuyến FTTx?",
    options: [
      "Bù đắp sự suy giảm tín hiệu để đảm bảo chất lượng tín hiệu",
      "Giảm bớt chi phí mua thiết bị đầu cuối.",
      "Tăng cường khả năng bảo mật thông tin.",
      "Thay thế hoàn toàn cho dự trữ hệ thống."
    ],
    answer: "Bù đắp sự suy giảm tín hiệu để đảm bảo chất lượng tín hiệu"
  },
  {
    question: "Trong thiết kế tuyến FTTx, dự trữ hệ thống là gì?",
    options: [
      "Là kho thiết bị thay thế khi hỏng hóc.",
      "Dự trữ hệ là một yếu tố an toàn mức công suất quang trong thiết kế tuyến.",
      "Là lượng cáp quang dự phòng để trong kho.",
      "Là nguồn điện dự phòng (UPS) cho OLT."
    ],
    answer: "Dự trữ hệ là một yếu tố an toàn mức công suất quang trong thiết kế tuyến."
  },
  {
    question: "Cách tính quỹ công suất tuyến FTTx (Suy hao cho phép) là:",
    options: [
      "Pt = Ps + Pr",
      "Pt = Ps / Pr",
      "Pt = Ps - Pr",
      "Pt = Ps * Pr"
    ],
    answer: "Pt = Ps - Pr"
  },
   {
    question: "Đây là cơ chế bảo vệ nào:",
    image: "./image/cau22.jpg",
    options: [
      "1 + 1",
      "1 : 1",
      "1 : N",
      "1 : 2"
    ],
    answer: "1 + 1"
  },
   {
    question: "Đây là cơ chế bảo vệ nào:",
    image: "./image/cau23.jpg",
    options: [
      "1 + 1",
      "1 : 1",
      "1 : N",
      "1 : 2"
    ],
    answer: "1 : 1"
  },
    {
    question: "Trong TDM-PON, đặc tính hoạt động của bộ thu quang OLT kiểu burst có bao nhiêu mức mẫu tín hiệu?",
    options: [
      "3",
      "1",
      "2",
      "4"
    ],
    answer: "3",
    explanation: "Mức 0, 1 và mức ngưỡng"
  },

  //Bonus Questions for AI
  {
    question: "Chuyển mạch nhãn đa giao thức tổng quát (GMPLS) được hiểu là:",
    options: [
      "Là sự mở rộng chức năng điều khiển MPLS cho mạng quang, kế thừa hoàn toàn các giao thức quản lý và điều khiển từ mạng IP mà không cần bất kì sự thay đổi nào.",
      "Là sự mở rộng chức năng điều khiển của mạng MPLS cho mạng quang, cho phép tạo mặt phẳng điều khiển, quản lý thống nhất không chỉ ở lớp mạng mà còn ở lớp ứng dụng, lớp truyền dẫn và lớp vật lý.",
      "Là sự mở rộng chức năng điều khiển MPLS cho mạng quang, sử dụng tiêu đề (header) của các gói IP làm nhãn chuyển mạch quang, tạo ra liên kết từ đầu cuối đến đầu cuối.",
      "Là sự mở rộng chức năng điều khiển của mạng MPLS cho mạng quang, cho phép tạo mặt phẳng điều khiển, quản lý trên lớp IP, tách biệt khỏi lớp WDM, tối ưu cho chuyển mạch kênh quang."
    ],
    answer: "Là sự mở rộng chức năng điều khiển của mạng MPLS cho mạng quang, cho phép tạo mặt phẳng điều khiển, quản lý thống nhất không chỉ ở lớp mạng mà còn ở lớp ứng dụng, lớp truyền dẫn và lớp vật lý."
  },
  {
    question: "Mạng quang thế hệ thứ hai (Optical Network Generation 2) có đặc điểm nổi bật nào so với thế hệ thứ nhất?",
    options: [
      "Chỉ sử dụng công nghệ ghép kênh theo thời gian (TDM) để tăng dung lượng",
      "Toàn bộ chức năng chuyển mạch và định tuyến đều được xử lý bằng điện tử",
      "Có khả năng định tuyến, chuyển mạch và tính thông minh ngay trong lớp quang",
      "Sử dụng cáp đồng trục thay thế cho cáp quang để giảm chi phí"
    ],
    answer: "Có khả năng định tuyến, chuyển mạch và tính thông minh ngay trong lớp quang",
    explanation: "Mạng quang thế hệ thứ hai (mạng WDM) đưa các chức năng định tuyến, chuyển mạch và trí thông minh xuống lớp quang, khác với thế hệ đầu (SONET/SDH) chỉ dùng quang để truyền dẫn."
  },
  {
    question: "Trong kiến trúc mạng quang tổng quát, 'Mạng đô thị' (Metropolitan network) bao gồm những thành phần nào?",
    options: [
      "Chỉ bao gồm mạng truy nhập kết nối đến nhà riêng",
      "Mạng truy nhập đô thị và mạng liên kết đô thị",
      "Mạng đường trục quốc tế và mạng vệ tinh",
      "Các kết nối nội bộ trong một tòa nhà văn phòng duy nhất"
    ],
    answer: "Mạng truy nhập đô thị và mạng liên kết đô thị",
    explanation: "Theo kiến trúc tổng quát, mạng đô thị gồm mạng truy nhập (kết nối từ trung tâm đến khách hàng) và mạng liên kết (kết nối các trung tâm/CO trong vùng)."
  },
  {
    question: "Phương pháp nào sau đây được sử dụng để tăng dung lượng truyền dẫn trên một sợi quang bằng cách ghép nhiều bước sóng khác nhau?",
    options: [
      "Ghép kênh phân chia theo thời gian (TDM)",
      "Ghép kênh phân chia bước sóng (WDM)",
      "Chuyển mạch gói (Packet Switching)",
      "Mã hóa đường truyền (Line Coding)"
    ],
    answer: "Ghép kênh phân chia bước sóng (WDM)",
    explanation: "WDM (Wavelength Division Multiplexing) là kỹ thuật cho phép truyền đồng thời nhiều tín hiệu quang với các bước sóng khác nhau trên cùng một sợi quang."
  },
  {
    question: "Đặc điểm nào sau đây là nhược điểm của chuyển mạch kênh (Circuit switching) so với chuyển mạch gói?",
    options: [
      "Không đảm bảo băng thông cho kết nối",
      "Không hiệu quả trong việc xử lý lưu lượng dữ liệu có tính bùng nổ",
      "Độ trễ truyền dẫn thay đổi liên tục",
      "Không thể sử dụng cho dịch vụ thoại"
    ],
    answer: "Không hiệu quả trong việc xử lý lưu lượng dữ liệu có tính bùng nổ",
    explanation: "Do chuyển mạch kênh dành riêng băng thông cố định, nếu dữ liệu truyền không liên tục (bùng nổ), phần băng thông dự trữ sẽ bị lãng phí."
  },
  {
    question: "Trong các thông số đo hiệu năng lỗi, 'Giây lỗi nghiêm trọng' (SES - Severely Errored Second) được định nghĩa là gì?",
    options: [
      "Khoảng thời gian 1 giây có ít nhất 1 khối bị lỗi",
      "Khoảng thời gian 1 giây trong đó có hơn 30% khối bị lỗi",
      "Khoảng thời gian 1 giây mà hệ thống hoàn toàn mất tín hiệu",
      "Một chuỗi liên tiếp từ 3 đến 9 giây bị lỗi"
    ],
    answer: "Khoảng thời gian 1 giây trong đó có hơn 30% khối bị lỗi",
    explanation: "Theo chuẩn đo lường hiệu năng, SES là khoảng thời gian 1 giây mà tại đó tỷ lệ các khối bị lỗi vượt quá 30%."
  },
  {
    question: "Mục đích chính của việc phân lớp mạng (layering) trong kiến trúc mạng quang là gì?",
    options: [
      "Để tăng tốc độ truyền dẫn của tín hiệu quang",
      "Để loại bỏ hoàn toàn nhu cầu sử dụng phần mềm quản lý",
      "Giảm độ phức tạp, tiêu chuẩn hóa giao diện và thuận tiện module hóa",
      "Để đảm bảo tất cả các thiết bị mạng đều phải từ cùng một nhà sản xuất"
    ],
    answer: "Giảm độ phức tạp, tiêu chuẩn hóa giao diện và thuận tiện module hóa",
    explanation: "Phân lớp giúp chia nhỏ các chức năng phức tạp của mạng thành các phần quản lý được, chuẩn hóa giao diện giữa các lớp và hỗ trợ phát triển độc lập (module hóa)."
  },
  {
    question: "Trong mô hình phân lớp của mạng quang thế hệ thứ hai, lớp nào đóng vai trò là 'máy chủ' cung cấp dịch vụ đường truyền cho các lớp khách hàng khác?",
    options: [
      "Lớp Ứng dụng (Application layer)",
      "Lớp Quang (Optical layer)",
      "Lớp Liên kết dữ liệu (Data link layer)",
      "Lớp Phiên (Session layer)"
    ],
    answer: "Lớp Quang (Optical layer)",
    explanation: "Lớp quang là lớp được thêm vào trong thế hệ thứ hai, đóng vai trò server cung cấp các lightpath (tuyến quang) cho các lớp khách hàng như IP, ATM, SONET/SDH."
  },
  {
    question: "Thuật ngữ BER (Bit Error Ratio) được hiểu chính xác nhất là gì?",
    options: [
      "Số lượng bit lỗi trong một giây",
      "Tỷ số giữa số bit bị lỗi trên tổng số bit được truyền đi",
      "Tổng số gói tin bị mất do nghẽn mạng",
      "Thời gian trễ trung bình của một bit khi đi qua mạng"
    ],
    answer: "Tỷ số giữa số bit bị lỗi trên tổng số bit được truyền đi",
    explanation: "BER (Bit Error Ratio) phản ánh xác suất lỗi, được tính bằng số bit lỗi chia cho tổng số bit đã truyền trong khoảng thời gian đo."
  },
  {
    question: "Mạng truy nhập quang thụ động (PON) phát triển qua các giai đoạn nào theo xu hướng tăng tốc độ?",
    options: [
      "ATM-PON -> Ethernet PON (EPON) -> Gigabit PON (GPON) -> NG-PON",
      "NG-PON -> GPON -> EPON -> ATM-PON",
      "WDM-PON -> TDM-PON -> Analog PON",
      "Chỉ có duy nhất công nghệ GPON được sử dụng"
    ],
    answer: "ATM-PON -> Ethernet PON (EPON) -> Gigabit PON (GPON) -> NG-PON",
    explanation: "Lịch sử phát triển PON đi từ các chuẩn thấp (APON/BPON) lên các chuẩn tốc độ cao hơn như EPON, GPON và sau đó là các thế hệ kế tiếp (NG-PON)."
  },
  {
    question: "Một trong những lý do khiến dịch vụ hướng kết nối (connection-oriented) khác biệt so với phi kết nối là:",
    options: [
      "Các gói tin trong cùng một kết nối có thể đi theo nhiều đường khác nhau",
      "Không cần thiết lập kết nối trước khi truyền dữ liệu",
      "Cần thiết lập kết nối giữa hai bên trên mạng cơ sở trước khi truyền tin",
      "Không đảm bảo chất lượng dịch vụ (QoS)"
    ],
    answer: "Cần thiết lập kết nối giữa hai bên trên mạng cơ sở trước khi truyền tin",
    explanation: "Dịch vụ hướng kết nối bắt buộc phải có pha thiết lập (handshake/setup) để xác định đường truyền và tài nguyên trước khi dữ liệu được gửi đi."
  },
  {
    question: "Công nghệ NG-SDH (Next Generation SDH) được phát triển nhằm mục đích chính là gì?",
    options: [
      "Thay thế hoàn toàn mạng Ethernet bằng mạng SDH",
      "Khắc phục sự kém hiệu quả của SDH truyền thống khi truyền tải lưu lượng số liệu (data) và cung cấp băng thông linh hoạt",
      "Tăng tốc độ truyền dẫn của cáp quang lên vô hạn",
      "Loại bỏ hoàn toàn lớp quang ra khỏi mô hình mạng"
    ],
    answer: "Khắc phục sự kém hiệu quả của SDH truyền thống khi truyền tải lưu lượng số liệu (data) và cung cấp băng thông linh hoạt",
    explanation: "SDH truyền thống được thiết kế tối ưu cho thoại (voice) và rất cứng nhắc. NG-SDH ra đời với các giao thức mới giúp truyền tải dữ liệu gói (IP/Ethernet) hiệu quả hơn trên nền tảng SDH có sẵn."
  },
  {
    question: "Ba giao thức cốt lõi tạo nên công nghệ NG-SDH là gì?",
    options: [
      "TCP, IP, và UDP",
      "GFP, VCAT, và LCAS",
      "MPLS, GMPLS, và OSPF",
      "WDM, TDM, và FDM"
    ],
    answer: "GFP, VCAT, và LCAS",
    explanation: "NG-SDH được định nghĩa bởi 3 giao thức: GFP (Generic Framing Procedure - đóng gói), VCAT (Virtual Concatenation - ghép kênh ảo), và LCAS (Link Capacity Adjustment Scheme - điều chỉnh dung lượng)."
  },
  {
    question: "Giao thức GFP (Generic Framing Procedure) có chức năng gì trong NG-SDH?",
    options: [
      "Định tuyến các gói tin IP",
      "Thích ứng và đóng gói các luồng dữ liệu (như Ethernet, Fiber Channel) vào các container đồng bộ của SDH",
      "Tăng cường độ tín hiệu quang",
      "Phát hiện lỗi đứt cáp quang"
    ],
    answer: "Thích ứng và đóng gói các luồng dữ liệu (như Ethernet, Fiber Channel) vào các container đồng bộ của SDH",
    explanation: "GFP là một giao thức đóng gói tiêu chuẩn (ITU-T G.7041) cho phép ánh xạ các tín hiệu khách hàng không đồng bộ, có độ dài thay đổi vào các khung đồng bộ byte-oriented."
  },
  {
    question: "Sự khác biệt chính giữa ghép kênh liền kề (Contiguous Concatenation) và ghép kênh ảo (Virtual Concatenation - VCAT) là gì?",
    options: [
      "VCAT yêu cầu các container phải nằm cạnh nhau và đi cùng một đường",
      "VCAT cho phép các container thành phần (VC) được định tuyến độc lập qua mạng và không cần thiết bị trung gian hỗ trợ",
      "VCAT có tốc độ thấp hơn ghép kênh liền kề",
      "VCAT chỉ dùng cho thoại, ghép kênh liền kề dùng cho dữ liệu"
    ],
    answer: "VCAT cho phép các container thành phần (VC) được định tuyến độc lập qua mạng và không cần thiết bị trung gian hỗ trợ",
    explanation: "VCAT phá vỡ sự cứng nhắc của SDH bằng cách cho phép nhóm các VC rời rạc lại thành một liên kết logic lớn, các VC này có thể đi các đường vật lý khác nhau."
  },
  {
    question: "Giao thức LCAS (Link Capacity Adjustment Scheme) mang lại lợi ích gì cho mạng quang?",
    options: [
      "Cho phép thay đổi băng thông của liên kết VCAT một cách linh hoạt mà không gây gián đoạn dịch vụ (hitless)",
      "Tự động sửa lỗi bit (Forward Error Correction)",
      "Chuyển đổi tín hiệu quang sang điện",
      "Tăng khoảng cách truyền dẫn"
    ],
    answer: "Cho phép thay đổi băng thông của liên kết VCAT một cách linh hoạt mà không gây gián đoạn dịch vụ (hitless)",
    explanation: "LCAS (ITU-T G.7042) là giao thức bắt tay cho phép thêm hoặc bớt các thành viên VCAT trong thời gian thực để tăng/giảm băng thông mà không làm mất dữ liệu."
  },
  {
    question: "Trong công nghệ MPLS (Multiprotocol Label Switching), việc chuyển tiếp gói tin dựa trên yếu tố nào?",
    options: [
      "Địa chỉ IP nguồn và đích dài nhất",
      "Nhãn (Label) ngắn có độ dài cố định",
      "Địa chỉ MAC",
      "Số cổng vật lý"
    ],
    answer: "Nhãn (Label) ngắn có độ dài cố định",
    explanation: "MPLS cải thiện tốc độ chuyển tiếp bằng cách sử dụng các nhãn ngắn (Label) thay vì phải tra cứu bảng định tuyến IP phức tạp tại mỗi nút mạng."
  },
  {
    question: "Hai chế độ hoạt động chính của giao thức GFP là gì?",
    options: [
      "GFP-A (Async) và GFP-S (Sync)",
      "GFP-F (Frame-mapped) và GFP-T (Transparent-mapped)",
      "GFP-L (Light) và GFP-H (Heavy)",
      "GFP-TCP và GFP-UDP"
    ],
    answer: "GFP-F (Frame-mapped) và GFP-T (Transparent-mapped)",
    explanation: "GFP-F đóng gói toàn bộ khung PDU (hiệu quả băng thông tốt), trong khi GFP-T đóng gói mã 8B/10B (độ trễ thấp, phù hợp với SAN/Video)."
  },
  {
    question: "Tại sao nói Ethernet là một lớp khách hàng quan trọng của lớp quang?",
    options: [
      "Vì Ethernet là công nghệ thống trị trong mạng LAN và đang mở rộng ra MAN/WAN",
      "Vì Ethernet có khả năng truyền dẫn xa hơn cáp quang",
      "Vì Ethernet thay thế hoàn toàn giao thức IP",
      "Vì Ethernet không cần đóng gói khi đi qua mạng quang"
    ],
    answer: "Vì Ethernet là công nghệ thống trị trong mạng LAN và đang mở rộng ra MAN/WAN",
    explanation: "Ethernet chiếm hơn 90% lưu lượng mạng LAN toàn cầu, do đó các mạng quang (MAN/WAN) phải tối ưu hóa để vận chuyển lưu lượng Ethernet này đi xa."
  },
  {
    question: "Chức năng của LSP (Label Switched Path) trong mạng MPLS là gì?",
    options: [
      "Là một đường dẫn ảo được thiết lập trước cho các gói tin có cùng nhãn di chuyển qua mạng MPLS",
      "Là thiết bị định tuyến biên",
      "Là giao thức phân phối nhãn",
      "Là bảng định tuyến IP"
    ],
    answer: "Là một đường dẫn ảo được thiết lập trước cho các gói tin có cùng nhãn di chuyển qua mạng MPLS",
    explanation: "LSP là con đường luận lý được thiết lập xuyên suốt mạng MPLS, giống như một mạch ảo để chuyển gói tin từ LER đầu vào đến LER đầu ra."
  },
  {
    question: "Xu hướng IP over WDM (IP trực tiếp trên quang) nhằm mục đích gì?",
    options: [
      "Tăng thêm nhiều lớp trung gian để quản lý chặt chẽ hơn",
      "Giảm bớt các lớp trung gian (như SDH/ATM), giảm độ phức tạp và chi phí mạng (overhead)",
      "Làm chậm tốc độ mạng để đảm bảo an toàn",
      "Chuyển tất cả về mạng chuyển mạch kênh"
    ],
    answer: "Giảm bớt các lớp trung gian (như SDH/ATM), giảm độ phức tạp và chi phí mạng (overhead)",
    explanation: "Mô hình IP over WDM hướng tới kiến trúc mạng phẳng hơn, loại bỏ các tầng giao thức chồng chéo không cần thiết để tối ưu hóa hiệu suất và chi phí."
  },
  {
    question: "Công nghệ OTN (Optical Transport Network) thường được gọi là gì do đặc điểm cấu trúc khung của nó?",
    options: [
      "Digital Wrapper (Vỏ bọc số)",
      "Analog Carrier (Sóng mang tương tự)",
      "Virtual Circuit (Mạch ảo)",
      "Optical Burst (Chùm quang)"
    ],
    answer: "Digital Wrapper (Vỏ bọc số)",
    explanation: "OTN được mệnh danh là 'Digital Wrapper' vì nó bọc các tín hiệu khách hàng (như Ethernet, SDH, IP) vào trong một cấu trúc khung số tiêu chuẩn để thêm các tính năng quản lý, giám sát và sửa lỗi."
  },
  {
    question: "Ưu điểm vượt trội của OTN so với SDH/SONET là khả năng tích hợp sẵn kỹ thuật nào để cải thiện cự ly truyền dẫn?",
    options: [
      "CSMA/CD (Đa truy nhập nhận biết sóng mang)",
      "FEC (Forward Error Correction - Sửa lỗi trước)",
      "WDM (Ghép kênh bước sóng)",
      "Mã hóa Manchester"
    ],
    answer: "FEC (Forward Error Correction - Sửa lỗi trước)",
    explanation: "OTN dành riêng một phần trong khung (frame) cho FEC (Reed-Solomon), giúp khôi phục các bit bị lỗi tại đầu thu, cho phép truyền đi xa hơn mà không cần các trạm tái sinh tín hiệu (3R regenerator)."
  },
  {
    question: "Trong phân cấp OTN, đơn vị nào tương ứng với tốc độ khoảng 10 Gbps (dùng để tải Ethernet 10G hoặc STM-64)?",
    options: [
      "OTU1",
      "OTU2",
      "OTU3",
      "OTU4"
    ],
    answer: "OTU2",
    explanation: "Phân cấp OTN: OTU1 (~2.5G), OTU2 (~10G), OTU3 (~40G), OTU4 (~100G). OTU2 là chuẩn phổ biến để truyền tải 10 Gigabit Ethernet hoặc OC-192/STM-64."
  },
  {
    question: "GMPLS (Generalized MPLS) mở rộng khả năng của MPLS truyền thống bằng cách hỗ trợ chuyển mạch trên các giao diện nào?",
    options: [
      "Chỉ hỗ trợ giao diện gói (Packet)",
      "Hỗ trợ đa dạng: Gói, Khe thời gian (TDM), Bước sóng (Lambda) và Sợi quang (Fiber)",
      "Chỉ hỗ trợ giao diện vô tuyến",
      "Chỉ hỗ trợ mạng LAN nội bộ"
    ],
    answer: "Hỗ trợ đa dạng: Gói, Khe thời gian (TDM), Bước sóng (Lambda) và Sợi quang (Fiber)",
    explanation: "GMPLS tổng quát hóa khái niệm 'nhãn' (Label). Nhãn không chỉ là số trong header gói tin, mà có thể là một khe thời gian, một bước sóng ánh sáng, hoặc một cổng sợi quang vật lý."
  },
  {
    question: "Cấu trúc khung của OTN bao gồm các vùng chức năng chính nào?",
    options: [
      "Header, IP Payload, Footer",
      "Overhead, Payload, FEC",
      "Preamble, SFD, FCS",
      "Virtual Container, Pointer, Path Overhead"
    ],
    answer: "Overhead, Payload, FEC",
    explanation: "Khung OTN (OTUk) gồm 3 phần chính: Vùng Overhead (để quản lý, giám sát), vùng Payload (chứa dữ liệu OPU), và vùng FEC (để sửa lỗi)."
  },
  {
    question: "Giao thức Ethernet khi chạy trên mạng WAN/Metro quang (Carrier Ethernet) cần giải quyết vấn đề gì quan trọng nhất so với Ethernet trong LAN?",
    options: [
      "Phát hiện xung đột (Collision Detection)",
      "Đảm bảo chất lượng dịch vụ (QoS) và giám sát lỗi từ đầu cuối đến đầu cuối (OAM)",
      "Giảm tốc độ để phù hợp với cáp quang",
      "Sử dụng cáp đồng xoắn đôi"
    ],
    answer: "Đảm bảo chất lượng dịch vụ (QoS) và giám sát lỗi từ đầu cuối đến đầu cuối (OAM)",
    explanation: "Ethernet LAN nguyên thủy là 'nỗ lực tối đa' (best-effort) và thiếu công cụ giám sát. Carrier Ethernet phải bổ sung OAM (Operation, Administration, Maintenance) để nhà mạng có thể cam kết SLA với khách hàng."
  },
  {
    question: "Tầng OPU (Optical Payload Unit) trong cấu trúc OTN có chức năng gì?",
    options: [
      "Thực hiện sửa lỗi FEC",
      "Định tuyến bước sóng quang",
      "Thích ứng tốc độ và ghép các tín hiệu khách hàng (Client signals) vào khung",
      "Giám sát đoạn lặp (Section Monitoring)"
    ],
    answer: "Thích ứng tốc độ và ghép các tín hiệu khách hàng (Client signals) vào khung",
    explanation: "OPU là tầng trong cùng của OTN, có nhiệm vụ map (ánh xạ) tín hiệu khách hàng (như IP, Ethernet, SDH) vào tải trọng và điều chỉnh tốc độ cho phù hợp."
  },
  {
    question: "10 Gigabit Ethernet (10GbE) có hai chuẩn giao diện vật lý chính là LAN PHY và WAN PHY. WAN PHY được thiết kế để làm gì?",
    options: [
      "Kết nối trực tiếp với máy tính cá nhân",
      "Tương thích và đóng gói trực tiếp vào khung SDH/SONET (STM-64/OC-192)",
      "Sử dụng cho mạng không dây",
      "Thay thế hoàn toàn OTN"
    ],
    answer: "Tương thích và đóng gói trực tiếp vào khung SDH/SONET (STM-64/OC-192)",
    explanation: "WAN PHY hoạt động ở tốc độ 9.953 Gbps (tương đương OC-192c) và có cấu trúc khung tương thích với SDH/SONET, cho phép Ethernet chạy qua mạng đường trục SDH cũ một cách dễ dàng."
  },
  {
    question: "Trong mô hình IP over WDM, mô hình 'Overlay' (Chồng lấn) có đặc điểm gì?",
    options: [
      "Lớp IP và lớp Quang có chung một mặt phẳng điều khiển",
      "Lớp IP và lớp Quang tách biệt hoàn toàn, lớp IP hoạt động như một khách hàng của lớp Quang",
      "Router IP điều khiển trực tiếp các thiết bị chuyển mạch quang",
      "Không sử dụng định tuyến"
    ],
    answer: "Lớp IP và lớp Quang tách biệt hoàn toàn, lớp IP hoạt động như một khách hàng của lớp Quang",
    explanation: "Mô hình Overlay tách biệt miền dữ liệu (IP) và miền quang. Router IP không biết cấu trúc bên trong của mạng quang, chỉ yêu cầu kết nối (lightpath) từ điểm A đến B."
  },
  {
    question: "Khái niệm 'Control Plane' (Mặt phẳng điều khiển) và 'Data Plane' (Mặt phẳng dữ liệu) tách biệt là đặc trưng của công nghệ nào trong mạng quang thông minh?",
    options: [
      "SDH truyền thống",
      "ASON/GMPLS (Automatically Switched Optical Network)",
      "Ethernet Hub",
      "Cáp quang biển"
    ],
    answer: "ASON/GMPLS (Automatically Switched Optical Network)",
    explanation: "ASON/GMPLS đưa trí thông minh vào mạng quang bằng cách tách rời Control Plane (xử lý báo hiệu, định tuyến, khôi phục) khỏi Data Plane (chuyển tải dữ liệu người dùng)."
  },
  {
    question: "Trong mạng quang WDM, thiết bị nào cho phép rẽ (drop) và xen (add) một hoặc nhiều bước sóng tại một nút mạng mà không cần chuyển đổi toàn bộ tín hiệu quang sang điện?",
    options: [
      "OLT (Optical Line Terminal)",
      "OADM (Optical Add-Drop Multiplexer)",
      "OA (Optical Amplifier)",
      "Regenerator (Bộ tái sinh)"
    ],
    answer: "OADM (Optical Add-Drop Multiplexer)",
    explanation: "OADM (Optical Add-Drop Multiplexer) là thiết bị quan trọng trong mạng quang WDM, cho phép trích xuất (drop) các kênh bước sóng cụ thể tại nút địa phương và chèn (add) các kênh mới vào sợi quang chung, trong khi các kênh khác đi thẳng (express/pass-through)."
  },
  {
    question: "ROADM (Reconfigurable OADM) khác biệt so với OADM cố định (Fixed OADM) ở điểm nào?",
    options: [
      "ROADM rẻ hơn OADM cố định",
      "ROADM cho phép điều khiển cấu hình xen/rẽ bước sóng từ xa bằng phần mềm mà không cần can thiệp thủ công tại hiện trường",
      "ROADM chỉ hoạt động được với tín hiệu điện",
      "ROADM không hỗ trợ WDM"
    ],
    answer: "ROADM cho phép điều khiển cấu hình xen/rẽ bước sóng từ xa bằng phần mềm mà không cần can thiệp thủ công tại hiện trường",
    explanation: "ROADM sử dụng các công nghệ như WSS (Wavelength Selective Switch) để cho phép nhà quản trị định tuyến lại các bước sóng từ xa qua phần mềm quản lý, mang lại sự linh hoạt cao so với OADM cố định phải hàn nối thủ công."
  },
  {
    question: "Thiết bị OXC (Optical Cross Connect) đóng vai trò gì trong mạng quang dạng lưới (Mesh)?",
    options: [
      "Chuyển mạch các kênh quang (bước sóng) từ cổng đầu vào bất kỳ sang cổng đầu ra bất kỳ",
      "Chỉ thực hiện chức năng khuếch đại tín hiệu",
      "Chuyển đổi gói tin IP thành khung Ethernet",
      "Tạo ra xung clock đồng bộ cho toàn mạng"
    ],
    answer: "Chuyển mạch các kênh quang (bước sóng) từ cổng đầu vào bất kỳ sang cổng đầu ra bất kỳ",
    explanation: "OXC là thiết bị chuyển mạch cốt lõi trong mạng Mesh WDM, thực hiện chức năng nối chéo (cross-connect) các tín hiệu quang giữa nhiều sợi quang đầu vào và đầu ra, giúp định tuyến linh hoạt dung lượng lớn."
  },
  {
    question: "Bài toán RWA (Routing and Wavelength Assignment) trong thiết kế mạng WDM bao gồm hai nhiệm vụ chính nào?",
    options: [
      "Tìm đường đi vật lý cho kết nối và gán một bước sóng hợp lệ cho kết nối đó",
      "Định tuyến IP và chuyển mạch nhãn MPLS",
      "Khuếch đại tín hiệu và bù tán sắc",
      "Mã hóa dữ liệu và nén dữ liệu"
    ],
    answer: "Tìm đường đi vật lý cho kết nối và gán một bước sóng hợp lệ cho kết nối đó",
    explanation: "RWA là bài toán cơ bản khi thiết lập một 'Lightpath' (tuyến quang): cần xác định đi qua những sợi quang nào (Routing) và sử dụng bước sóng màu gì (Wavelength Assignment) để tránh xung đột."
  },
  {
    question: "Ràng buộc về tính liên tục của bước sóng (Wavelength Continuity Constraint) trong bài toán RWA có nghĩa là gì?",
    options: [
      "Bước sóng phải thay đổi liên tục qua mỗi nút mạng",
      "Một kết nối quang phải sử dụng cùng một bước sóng trên tất cả các liên kết (link) từ nguồn đến đích (nếu không có bộ chuyển đổi bước sóng)",
      "Ánh sáng phải được truyền liên tục không ngắt quãng",
      "Mọi bước sóng đều có cùng tốc độ truyền dẫn"
    ],
    answer: "Một kết nối quang phải sử dụng cùng một bước sóng trên tất cả các liên kết (link) từ nguồn đến đích (nếu không có bộ chuyển đổi bước sóng)",
    explanation: "Nếu mạng không có bộ chuyển đổi bước sóng (Wavelength Converter), một tín hiệu bắt đầu bằng bước sóng λ1 thì bắt buộc phải duy trì là λ1 trên toàn bộ hành trình."
  },
  {
    question: "Mô hình 'Overlay' (Chồng lấn) trong kiến trúc IP over WDM có đặc điểm gì?",
    options: [
      "Lớp IP và lớp Quang chia sẻ hoàn toàn thông tin định tuyến",
      "Lớp IP hoạt động độc lập với lớp Quang; lớp Quang cung cấp kết nối như một dịch vụ cho lớp IP",
      "Lớp IP điều khiển trực tiếp thiết bị OXC",
      "Loại bỏ hoàn toàn lớp quang"
    ],
    answer: "Lớp IP hoạt động độc lập với lớp Quang; lớp Quang cung cấp kết nối như một dịch vụ cho lớp IP",
    explanation: "Mô hình Overlay tách biệt hai lớp (Client-Server). Lớp IP (Client) yêu cầu băng thông, lớp Quang (Server) cung cấp đường truyền. Thông tin cấu trúc mạng quang được ẩn giấu đối với lớp IP."
  },
  {
    question: "Kiến trúc mạng quang nào có khả năng bảo vệ và phục hồi (survivability) tốt nhất và linh hoạt nhất?",
    options: [
      "Mạng điểm - điểm (Point-to-Point)",
      "Mạng Ring (Vòng)",
      "Mạng Mesh (Lưới)",
      "Mạng hình sao (Star)"
    ],
    answer: "Mạng Mesh (Lưới)",
    explanation: "Mạng Mesh cung cấp nhiều tuyến đường thay thế giữa các nút, cho phép các thuật toán phục hồi thông minh tìm đường tránh sự cố hiệu quả hơn và tiết kiệm tài nguyên dự phòng hơn so với mạng Ring."
  },
  {
    question: "Thiết bị OXC loại 'Opaque' (Quang - Điện - Quang hay O-E-O) có ưu điểm gì so với loại 'Transparent' (Toàn quang hay O-O-O)?",
    options: [
      "Giá thành rẻ hơn và tiêu thụ ít điện năng hơn",
      "Có khả năng tái tạo tín hiệu, chuyển đổi bước sóng dễ dàng và giám sát chất lượng bit (BER) tốt hơn",
      "Hoàn toàn trong suốt với tốc độ bit và định dạng tín hiệu",
      "Không gây trễ xử lý"
    ],
    answer: "Có khả năng tái tạo tín hiệu, chuyển đổi bước sóng dễ dàng và giám sát chất lượng bit (BER) tốt hơn",
    explanation: "OXC Opaque chuyển đổi tín hiệu về miền điện để xử lý. Điều này cho phép thực hiện 3R (Reamplifying, Reshaping, Retiming), chuyển đổi bước sóng tùy ý và giám sát lỗi chi tiết trước khi chuyển lại sang quang."
  },
  {
    question: "Giải pháp nào giúp giải quyết vấn đề tắc nghẽn bước sóng (wavelength blocking) trong bài toán RWA?",
    options: [
      "Sử dụng bộ chuyển đổi bước sóng (Wavelength Converter)",
      "Giảm công suất phát quang",
      "Tăng chiều dài sợi quang",
      "Sử dụng sợi quang đơn mode (SMF)"
    ],
    answer: "Sử dụng bộ chuyển đổi bước sóng (Wavelength Converter)",
    explanation: "Bộ chuyển đổi bước sóng cho phép thay đổi bước sóng của tín hiệu tại các nút trung gian. Nếu bước sóng λ1 bị bận ở đoạn tiếp theo, nó có thể đổi sang λ2 đang rỗi, giúp giảm khả năng cuộc gọi bị chặn (blocking)."
  },
  {
    question: "Mạng quang WDM định nghĩa bởi phần mềm (SDN - Software Defined Networking) hướng tới mục tiêu gì?",
    options: [
      "Tách biệt mặt phẳng điều khiển (Control Plane) khỏi thiết bị phần cứng và quản lý tập trung bằng phần mềm",
      "Thay thế cáp quang bằng sóng vô tuyến",
      "Loại bỏ hoàn toàn nhu cầu về con người vận hành",
      "Tăng số lượng phần cứng cần thiết"
    ],
    answer: "Tách biệt mặt phẳng điều khiển (Control Plane) khỏi thiết bị phần cứng và quản lý tập trung bằng phần mềm",
    explanation: "SDN (Software Defined Networking) trong mạng quang tập trung quyền điều khiển về một bộ Controller trung tâm, cho phép lập trình, tự động hóa và tối ưu hóa tài nguyên mạng một cách linh hoạt qua các API mở."
  },
  {
    question: "Trong các mô hình chuyển mạch quang, kỹ thuật nào được coi là giải pháp trung gian khả thi nhất giữa chuyển mạch kênh (OCS) và chuyển mạch gói (OPS)?",
    options: [
      "Optical Burst Switching (OBS) - Chuyển mạch chùm quang",
      "Circuit Switching - Chuyển mạch kênh",
      "Time Division Multiplexing - Ghép kênh theo thời gian",
      "Ethernet Switching"
    ],
    answer: "Optical Burst Switching (OBS) - Chuyển mạch chùm quang",
    explanation: "OBS (Optical Burst Switching) gom các gói tin IP thành các 'chùm' (burst). Gói điều khiển (header) được gửi đi trước trên kênh riêng để đặt chỗ tài nguyên tại các nút, sau một khoảng thời gian trễ (offset time), chùm dữ liệu sẽ đi theo mà không cần chờ xác nhận (ACK), giúp dung hòa giữa tốc độ xử lý quang và độ linh hoạt của gói."
  },
  {
    question: "Chức năng chính của thiết bị Transponder (Bộ phát đáp) trong mạng WDM là gì?",
    options: [
      "Chỉ khuếch đại tín hiệu quang",
      "Chuyển đổi bước sóng từ phía khách hàng (client side, ví dụ 1310nm 'xám') sang bước sóng chuẩn ITU (line side, ví dụ kênh C-band 'màu') để ghép vào hệ thống WDM",
      "Định tuyến gói tin IP",
      "Cấp nguồn cho các thiết bị khác"
    ],
    answer: "Chuyển đổi bước sóng từ phía khách hàng (client side, ví dụ 1310nm 'xám') sang bước sóng chuẩn ITU (line side, ví dụ kênh C-band 'màu') để ghép vào hệ thống WDM",
    explanation: "Transponder thực hiện chuyển đổi O-E-O (Quang-Điện-Quang). Nó nhận tín hiệu quang bước sóng ngắn/rộng từ thiết bị khách hàng (Router/Switch), tái tạo tín hiệu điện, rồi phát lại bằng laser có bước sóng cực kỳ chính xác (theo lưới ITU) để có thể ghép kênh WDM."
  },
  {
    question: "Trong cấu hình mạng Ring WDM 2 sợi (2-fiber Ring), cơ chế bảo vệ thường dùng nhất là gì?",
    options: [
      "OMS-SPRing (Optical Multiplex Section Shared Protection Ring)",
      "O-UPSR (Optical Unidirectional Path Switched Ring) hoặc O-SNCP (Subnetwork Connection Protection)",
      "Mesh Restoration",
      "Không có bảo vệ"
    ],
    answer: "O-UPSR (Optical Unidirectional Path Switched Ring) hoặc O-SNCP (Subnetwork Connection Protection)",
    explanation: "Trong cơ chế này (bảo vệ đường 1+1), tín hiệu nguồn được phát đồng thời đi theo hai hướng ngược nhau trên vòng Ring (hướng làm việc và hướng bảo vệ). Tại đầu thu, thiết bị sẽ giám sát và chọn tín hiệu tốt hơn. Nếu đứt một hướng, nó tự động chuyển sang dùng tín hiệu từ hướng kia."
  },
  {
    question: "Thiết bị OA (Optical Amplifier) loại EDFA (Erbium Doped Fiber Amplifier) hoạt động hiệu quả nhất ở vùng bước sóng nào?",
    options: [
      "Vùng 1310 nm (O-band)",
      "Vùng 1550 nm (C-band và L-band)",
      "Vùng 850 nm",
      "Vùng ánh sáng nhìn thấy"
    ],
    answer: "Vùng 1550 nm (C-band và L-band)",
    explanation: "EDFA sử dụng sợi quang pha tạp Erbium, khi được bơm năng lượng sẽ khuếch đại ánh sáng rất mạnh trong vùng 1530nm-1565nm (C-band), trùng khớp với vùng có độ suy hao thấp nhất của sợi quang Silica, làm cho nó trở thành bộ khuếch đại phổ biến nhất."
  },
  {
    question: "Vấn đề 'Tán sắc' (Dispersion) và 'Phi tuyến' (Non-linear effects) trở nên nghiêm trọng nhất trong loại mạng quang nào?",
    options: [
      "Mạng truy nhập ngắn (Access Network)",
      "Mạng đường trục cự ly dài (Long-haul WDM Network)",
      "Mạng LAN nội bộ",
      "Mạng điện thoại cố định"
    ],
    answer: "Mạng đường trục cự ly dài (Long-haul WDM Network)",
    explanation: "Trong mạng đường trục (Long-haul), tín hiệu đi quãng đường rất xa với cường độ lớn (do khuếch đại nhiều lần). Tán sắc tích lũy làm doãng xung gây chồng lấn bit (ISI), còn hiệu ứng phi tuyến gây méo tín hiệu, đòi hỏi thiết kế mạng phải tính toán bù trừ rất kỹ."
  },
  {
    question: "Kiến trúc nút mạng quang nào cho phép tín hiệu đi qua (express) mà không cần bất kỳ thiết bị điện tử nào xử lý?",
    options: [
      "Opaque Node (Nút mờ/đục)",
      "Transparent Node (Nút trong suốt - All Optical)",
      "Router IP",
      "DSLAM"
    ],
    answer: "Transparent Node (Nút trong suốt - All Optical)",
    explanation: "Nút trong suốt (Transparent) sử dụng các công nghệ chuyển mạch quang học (như MEMS, LCOS) để lái luồng ánh sáng từ cổng này sang cổng kia mà không cần chuyển đổi sang điện. Ưu điểm là không phụ thuộc tốc độ bit hay giao thức, nhưng khó giám sát lỗi từng bit."
  },
  {
    question: "Trong mạng WDM, khái niệm 'Lưới bước sóng linh hoạt' (Flex-grid) có ý nghĩa gì so với 'Lưới cố định' (Fixed-grid ITU-T)?",
    options: [
      "Chỉ sử dụng một bước sóng duy nhất",
      "Cho phép thay đổi độ rộng băng thông của kênh quang tùy theo nhu cầu tốc độ (ví dụ: kênh 37.5GHz, 50GHz, 75GHz...) thay vì cố định 50GHz",
      "Bước sóng tự động thay đổi màu sắc",
      "Không cần sử dụng bộ lọc quang"
    ],
    answer: "Cho phép thay đổi độ rộng băng thông của kênh quang tùy theo nhu cầu tốc độ (ví dụ: kênh 37.5GHz, 50GHz, 75GHz...) thay vì cố định 50GHz",
    explanation: "Flex-grid chia phổ quang thành các lát nhỏ (frequency slots, ví dụ 12.5GHz). Một kênh truyền siêu tốc (400G, 1T) có thể chiếm nhiều slot ghép lại để vừa đủ băng thông cần thiết, tránh lãng phí khoảng bảo vệ (guard band) lớn như trong lưới cố định (Fixed-grid 50GHz/100GHz)."
  },
  {
    question: "Sự khác biệt cơ bản nhất về mặt thời gian đáp ứng giữa 'Quản lý mạng' (Management) và 'Điều khiển mạng' (Control) là gì?",
    options: [
      "Quản lý mạng diễn ra trong thời gian thực (real-time), còn Điều khiển mạng diễn ra chậm hơn",
      "Quản lý mạng thường có thời gian đáp ứng chậm (phút, giờ) và có sự can thiệp của con người, trong khi Điều khiển mạng diễn ra nhanh (mili-giây, giây) và tự động hóa",
      "Hai khái niệm này là một, không có sự khác biệt",
      "Điều khiển mạng chỉ thực hiện khi lắp đặt thiết bị"
    ],
    answer: "Quản lý mạng thường có thời gian đáp ứng chậm (phút, giờ) và có sự can thiệp của con người, trong khi Điều khiển mạng diễn ra nhanh (mili-giây, giây) và tự động hóa",
    explanation: "Quản lý mạng (NMS) tập trung vào giám sát dài hạn và cấu hình tĩnh. Điều khiển mạng (Control Plane) tập trung vào các tác vụ thời gian thực như khôi phục lỗi (restoration) và cấp phát tài nguyên động theo yêu cầu (signaling)."
  },
  {
    question: "Mô hình chức năng quản lý mạng tiêu chuẩn FCAPS bao gồm những thành phần nào?",
    options: [
      "Fiber, Cable, Amplifier, Protection, Switch",
      "Fault, Configuration, Accounting, Performance, Security",
      "Forwarding, Control, Access, Power, Signaling",
      "Frequency, Channel, Amplitude, Phase, Speed"
    ],
    answer: "Fault, Configuration, Accounting, Performance, Security",
    explanation: "FCAPS là chuẩn ISO bao gồm: Quản lý lỗi (Fault), Cấu hình (Configuration), Tính cước (Accounting), Hiệu năng (Performance), và Bảo mật (Security)."
  },
  {
    question: "Trong kiến trúc ASON (Automatically Switched Optical Network), giao diện UNI (User Network Interface) kết nối giữa hai thực thể nào?",
    options: [
      "Giữa hai nút mạng quang (OXC) với nhau",
      "Giữa thiết bị khách hàng (Client, ví dụ Router IP) và thiết bị biên của mạng quang (Optical Network Edge)",
      "Giữa hệ thống quản lý mạng (NMS) và thiết bị mạng",
      "Giữa phần mềm điều khiển và phần cứng"
    ],
    answer: "Giữa thiết bị khách hàng (Client, ví dụ Router IP) và thiết bị biên của mạng quang (Optical Network Edge)",
    explanation: "UNI (User Network Interface) là cổng giao tiếp cho phép thiết bị khách hàng (như Router) gửi yêu cầu thiết lập băng thông hoặc kết nối quang tới nhà cung cấp mạng."
  },
  {
    question: "Giao thức nào trong bộ giao thức GMPLS chịu trách nhiệm 'phát hiện lỗi liên kết' và 'quản lý kết nối vật lý' giữa hai nút lân cận?",
    options: [
      "RSVP-TE (Resource Reservation Protocol)",
      "OSPF-TE (Open Shortest Path First)",
      "LMP (Link Management Protocol)",
      "BGP (Border Gateway Protocol)"
    ],
    answer: "LMP (Link Management Protocol)",
    explanation: "LMP chạy giữa hai nút kề nhau để kiểm tra xem sợi quang có thông không, ánh xạ cổng nào nối với cổng nào và phát hiện lỗi suy hao tín hiệu cục bộ."
  },
  {
    question: "Mặt phẳng điều khiển (Control Plane) trong mạng quang thông minh ASON/GMPLS có chức năng chính là gì?",
    options: [
      "Vận chuyển dữ liệu người dùng",
      "Tự động thiết lập, duy trì và giải phóng các kết nối quang thông qua các giao thức báo hiệu và định tuyến",
      "Giám sát nhiệt độ phòng máy",
      "Cung cấp nguồn điện cho các laser"
    ],
    answer: "Tự động thiết lập, duy trì và giải phóng các kết nối quang thông qua các giao thức báo hiệu và định tuyến",
    explanation: "Control Plane chuyển mạng quang từ trạng thái 'tĩnh' (cấu hình thủ công) sang trạng thái 'động' (thông minh), cho phép mạng tự động tìm đường và thiết lập dịch vụ theo yêu cầu."
  },
  {
    question: "Giao thức RSVP-TE (Resource Reservation Protocol - Traffic Engineering) trong GMPLS được sử dụng để làm gì?",
    options: [
      "Quảng bá thông tin topo mạng",
      "Báo hiệu (Signaling) để yêu cầu thiết lập đường dẫn (LSP) và dành trước tài nguyên băng thông dọc theo tuyến",
      "Mã hóa dữ liệu",
      "Quản lý lỗi thiết bị"
    ],
    answer: "Báo hiệu (Signaling) để yêu cầu thiết lập đường dẫn (LSP) và dành trước tài nguyên băng thông dọc theo tuyến",
    explanation: "RSVP-TE là giao thức báo hiệu. Sau khi định tuyến xong, RSVP-TE sẽ đi dọc theo tuyến đó để 'đặt gạch' (giữ chỗ) tài nguyên (bước sóng, khe thời gian) tại từng nút để tạo thành đường truyền."
  },
  {
    question: "Mạng quản lý viễn thông (TMN - Telecommunications Management Network) thường sử dụng giao thức nào để trao đổi thông tin quản lý giữa các thiết bị mạng và hệ thống quản lý trung tâm?",
    options: [
      "HTTP và HTML",
      "SNMP (Simple Network Management Protocol) hoặc CMIP (Common Management Information Protocol)",
      "RTP (Real-time Transport Protocol)",
      "ARP (Address Resolution Protocol)"
    ],
    answer: "SNMP (Simple Network Management Protocol) hoặc CMIP (Common Management Information Protocol)",
    explanation: "SNMP là giao thức tiêu chuẩn công nghiệp cho phép các trạm quản lý (Manager) đọc/ghi thông tin từ các Agent chạy trên thiết bị mạng để giám sát trạng thái và cấu hình."
  },
  {
    question: "Trong quản lý lỗi (Fault Management), khái niệm 'Tương quan cảnh báo' (Alarm Correlation) có ý nghĩa gì?",
    options: [
      "Tắt tất cả các cảnh báo để màn hình đỡ rối",
      "Phân tích hàng loạt cảnh báo phát sinh để tìm ra nguyên nhân gốc rễ (Root Cause) duy nhất",
      "Gửi cảnh báo qua email cho người quản trị",
      "Lưu trữ cảnh báo vào ổ cứng"
    ],
    answer: "Phân tích hàng loạt cảnh báo phát sinh để tìm ra nguyên nhân gốc rễ (Root Cause) duy nhất",
    explanation: "Trong mạng quang, một sự cố vật lý (đứt cáp) sẽ lan truyền lỗi lên các lớp trên (SDH, IP) gây ra cơn bão cảnh báo. Alarm Correlation giúp hệ thống thông minh chỉ ra đúng vị trí cáp đứt thay vì bắt người quản trị kiểm tra từng thiết bị."
  },
  {
    question: "Mô hình SDN (Software Defined Networking) áp dụng vào mạng quang (Optical SDN/Transport SDN) có đặc điểm nổi bật nào?",
    options: [
      "Phân tán quyền điều khiển về từng thiết bị",
      "Tách rời mặt phẳng điều khiển khỏi thiết bị phần cứng và tập trung hóa bộ điều khiển (SDN Controller)",
      "Sử dụng cáp đồng thay cho cáp quang",
      "Loại bỏ hoàn toàn giao thức IP"
    ],
    answer: "Tách rời mặt phẳng điều khiển khỏi thiết bị phần cứng và tập trung hóa bộ điều khiển (SDN Controller)",
    explanation: "SDN thay đổi kiến trúc từ phân tán (GMPLS) sang tập trung (Centralized Controller). Phần cứng trở nên đơn giản hơn, còn mọi logic điều khiển nằm ở phần mềm trung tâm, giúp mạng linh hoạt và dễ lập trình."
  },
  {
    question: "Trong kiến trúc GMPLS, giao thức OSPF-TE được mở rộng để quảng bá thông tin gì đặc thù của mạng quang?",
    options: [
      "Địa chỉ email của người quản trị",
      "Thông tin về băng thông khả dụng, loại bước sóng, giao diện bảo vệ và các ràng buộc vật lý quang học",
      "Nội dung gói tin người dùng",
      "Mật khẩu wifi"
    ],
    answer: "Thông tin về băng thông khả dụng, loại bước sóng, giao diện bảo vệ và các ràng buộc vật lý quang học",
    explanation: "OSPF-TE không chỉ quảng bá trạng thái 'up/down' của liên kết mà còn quảng bá các thuộc tính TE (Traffic Engineering) như: số lượng bước sóng rỗi, loại mã hóa, khả năng chuyển mạch, giúp thuật toán tìm đường chính xác hơn."
  },
  {
    question: "Sự khác biệt cơ bản giữa 'Bảo vệ' (Protection) và 'Phục hồi' (Restoration) trong mạng quang là gì?",
    options: [
      "Bảo vệ sử dụng tài nguyên dự phòng được thiết lập sẵn, thời gian chuyển mạch nhanh; Phục hồi sử dụng tài nguyên còn rỗi để tìm đường mới khi có sự cố, thời gian chậm hơn",
      "Bảo vệ diễn ra ở lớp IP, còn Phục hồi diễn ra ở lớp Quang",
      "Bảo vệ không tốn băng thông, còn Phục hồi tốn băng thông",
      "Hai khái niệm này hoàn toàn giống nhau"
    ],
    answer: "Bảo vệ sử dụng tài nguyên dự phòng được thiết lập sẵn, thời gian chuyển mạch nhanh; Phục hồi sử dụng tài nguyên còn rỗi để tìm đường mới khi có sự cố, thời gian chậm hơn",
    explanation: "Bảo vệ (Protection) dựa trên các đường dẫn dự phòng đã được định trước (pre-calculated) nên chuyển mạch rất nhanh (thường < 50ms). Phục hồi (Restoration) dựa trên việc tính toán đường đi động sau khi sự cố xảy ra, tiết kiệm băng thông hơn nhưng chậm hơn."
  },
  {
    question: "Trong cơ chế bảo vệ tuyến tính 1+1 (Linear 1+1 Protection), tín hiệu được truyền như thế nào?",
    options: [
      "Tín hiệu chỉ được truyền trên đường làm việc, đường bảo vệ để trống",
      "Tín hiệu được phát song song đồng thời trên cả đường làm việc và đường bảo vệ",
      "Tín hiệu được chia đôi dung lượng ra hai đường",
      "Chỉ sử dụng khi đường chính bị đứt"
    ],
    answer: "Tín hiệu được phát song song đồng thời trên cả đường làm việc và đường bảo vệ",
    explanation: "Trong chế độ 1+1, tín hiệu được sao chép và gửi đi trên cả hai đường (Working & Protection). Tại đầu thu, thiết bị giám sát chất lượng và chọn tín hiệu tốt nhất. Điều này giúp loại bỏ nhu cầu báo hiệu phức tạp giữa hai đầu."
  },
  {
    question: "Cơ chế bảo vệ mạng vòng MS-SPRing có ưu điểm gì so với SNCP?",
    options: [
      "Đơn giản hơn và không cần giao thức APS",
      "Hiệu quả sử dụng băng thông cao hơn do có thể chia sẻ băng thông bảo vệ cho lưu lượng ưu tiên thấp (extra traffic)",
      "Thời gian chuyển mạch nhanh hơn",
      "Chỉ hoạt động trên một sợi quang duy nhất"
    ],
    answer: "Hiệu quả sử dụng băng thông cao hơn do có thể chia sẻ băng thông bảo vệ cho lưu lượng ưu tiên thấp (extra traffic)",
    explanation: "SNCP là bảo vệ 1+1 (dành riêng), tốn 50% băng thông cố định. MS-SPRing là bảo vệ chia sẻ (Shared Protection), dung lượng bảo vệ có thể được dùng để truyền lưu lượng không quan trọng (Extra Traffic) khi mạng bình thường, giúp tối ưu hóa tài nguyên."
  },
  {
    question: "Tại sao cơ chế bảo vệ truyền thống của lớp IP (định tuyến lại) thường chậm và không đáp ứng được yêu cầu thời gian thực?",
    options: [
      "Do tốc độ ánh sáng quá chậm",
      "Do quá trình hội tụ bảng định tuyến (Routing Convergence) mất nhiều thời gian khi mạng lớn",
      "Do IP không có khả năng phát hiện lỗi",
      "Do cáp quang không hỗ trợ IP"
    ],
    answer: "Do quá trình hội tụ bảng định tuyến (Routing Convergence) mất nhiều thời gian khi mạng lớn",
    explanation: "Khi liên kết đứt, các Router phải gửi thông tin cập nhật (LSA) và chạy lại thuật toán Dijkstra để tính bảng định tuyến mới. Quá trình này trong mạng lớn có thể mất hàng chục giây, gây gián đoạn dịch vụ."
  },
  {
    question: "Chuẩn ITU-T G.8032 quy định cơ chế bảo vệ nào cho mạng Ethernet?",
    options: [
      "Ethernet Ring Protection (ERP) sử dụng giao thức R-APS",
      "Spanning Tree Protocol (STP)",
      "Link Aggregation (LAG)",
      "MPLS Fast Reroute"
    ],
    answer: "Ethernet Ring Protection (ERP) sử dụng giao thức R-APS",
    explanation: "G.8032 ERP được thiết kế chuyên biệt cho topo mạng Ring Ethernet, sử dụng bản tin R-APS để phối hợp đóng/mở cổng khóa (RPL Owner), đạt thời gian hồi phục < 50ms, khắc phục nhược điểm chậm chạp của STP."
  },
  {
    question: "Trong bảo vệ MPLS, kỹ thuật 'Fast Reroute' (FRR) sử dụng cơ chế gì để đạt thời gian phục hồi nhanh?",
    options: [
      "Tính toán lại đường đi từ đầu nguồn",
      "Sử dụng các đường hầm dự phòng (Backup Tunnels) được thiết lập sẵn tại các nút trung gian để đi vòng qua điểm lỗi",
      "Gửi lại gói tin bị mất",
      "Chuyển sang mạng Wifi"
    ],
    answer: "Sử dụng các đường hầm dự phòng (Backup Tunnels) được thiết lập sẵn tại các nút trung gian để đi vòng qua điểm lỗi",
    explanation: "MPLS FRR cho phép nút phát hiện lỗi (PLR) chuyển ngay lưu lượng vào một đường hầm dự phòng (bypass/detour) đã được dựng sẵn bao quanh điểm lỗi, thay vì chờ thiết bị đầu cuối tính toán lại toàn bộ tuyến đường."
  },
  {
    question: "Bảo vệ đoạn ghép quang (OMS Protection) khác với bảo vệ kênh quang (OCh Protection) ở điểm nào?",
    options: [
      "Bảo vệ OMS bảo vệ từng bước sóng riêng lẻ, còn OCh bảo vệ toàn bộ sợi quang",
      "Bảo vệ OMS bảo vệ toàn bộ tín hiệu ghép kênh (tất cả các bước sóng chung một đường), còn OCh bảo vệ từng kênh bước sóng riêng biệt",
      "OMS dùng cho mạng LAN, OCh dùng cho mạng WAN",
      "Hai cơ chế này là một"
    ],
    answer: "Bảo vệ OMS bảo vệ toàn bộ tín hiệu ghép kênh (tất cả các bước sóng chung một đường), còn OCh bảo vệ từng kênh bước sóng riêng biệt",
    explanation: "OMS (Optical Multiplex Section) bảo vệ đoạn đường truyền vật lý chứa tín hiệu WDM tổng hợp. OCh (Optical Channel) bảo vệ từng bước sóng (lambda) cụ thể trước khi hoặc sau khi ghép kênh, cho phép bảo vệ chọn lọc các dịch vụ quan trọng."
  },
  {
    question: "Trong mô hình bảo vệ OMS-DPRing (Dedicated Protection Ring), khi xảy ra sự cố đứt cáp, hệ thống sẽ làm gì?",
    options: [
      "Tắt toàn bộ hệ thống",
      "Các bộ khuếch đại quang (Amplifiers) trên cung bảo vệ sẽ được bật lên để tạo thành đường vòng thay thế",
      "Chuyển đổi tín hiệu sang điện",
      "Dùng vệ tinh để truyền tin"
    ],
    answer: "Các bộ khuếch đại quang (Amplifiers) trên cung bảo vệ sẽ được bật lên để tạo thành đường vòng thay thế",
    explanation: "Cấu trúc OMS-DPRing thường thiết lập các bộ khuếch đại ở trạng thái chờ (inactive) trên cung bảo vệ. Khi phát hiện lỗi, các bộ khuếch đại này được kích hoạt (active) để thiết lập tuyến quang mới đi vòng qua điểm sự cố."
  },
  {
    question: "Thời gian chờ (Hold-off time) trong quy trình phục hồi mạng có tác dụng gì?",
    options: [
      "Để người quản trị mạng đi uống cà phê",
      "Chờ đợi để xác nhận lỗi là thật sự bền vững, tránh kích hoạt bảo vệ khi lỗi chỉ chập chờn hoặc để các lớp thấp hơn tự sửa lỗi trước",
      "Tăng tốc độ truyền dữ liệu",
      "Giảm công suất tiêu thụ điện"
    ],
    answer: "Chờ đợi để xác nhận lỗi là thật sự bền vững, tránh kích hoạt bảo vệ khi lỗi chỉ chập chờn hoặc để các lớp thấp hơn tự sửa lỗi trước",
    explanation: "Hold-off time là khoảng thời gian hệ thống 'nghe ngóng' sau khi phát hiện lỗi. Nó giúp tránh hiện tượng 'đua điều khiển' (race condition) giữa các lớp mạng (ví dụ: để lớp Quang tự sửa xong trước khi lớp IP kịp phản ứng) và tránh kích hoạt sai do lỗi thoáng qua."
  },
  {
    question: "Mô hình 'Dual Homing' khi kết nối các vòng Ring SDH nhằm mục đích gì?",
    options: [
      "Tăng gấp đôi băng thông",
      "Tránh điểm lỗi đơn lẻ (Single Point of Failure) tại nút giao tiếp giữa hai vòng ring",
      "Giảm chi phí thiết bị",
      "Đơn giản hóa quản lý"
    ],
    answer: "Tránh điểm lỗi đơn lẻ (Single Point of Failure) tại nút giao tiếp giữa hai vòng ring",
    explanation: "Dual Homing sử dụng hai nút giao tiếp (Interconnection Nodes) riêng biệt để kết nối hai vòng Ring. Nếu một nút bị hỏng, lưu lượng vẫn có thể đi qua nút còn lại, đảm bảo tính sẵn sàng cao hơn so với Single Homing."
  },
  {
    question: "Đặc điểm cơ bản nhất phân biệt mạng quang thụ động (PON) với mạng quang chủ động (AON) là gì?",
    options: [
      "PON sử dụng thiết bị chuyển mạch điện tử cần nguồn điện ở giữa mạng lưới",
      "PON không sử dụng bất kỳ thành phần điện tử tích cực nào (cần nguồn điện) trong mạng phân phối quang (ODN) mà chỉ dùng các bộ chia quang (Splitter) thụ động",
      "PON có tốc độ thấp hơn AON",
      "PON chỉ dùng cho doanh nghiệp, AON dùng cho hộ gia đình"
    ],
    answer: "PON không sử dụng bất kỳ thành phần điện tử tích cực nào (cần nguồn điện) trong mạng phân phối quang (ODN) mà chỉ dùng các bộ chia quang (Splitter) thụ động",
    explanation: "PON (Passive Optical Network) loại bỏ các thiết bị điện tử hoạt động (Active) giữa nhà mạng và khách hàng, thay thế bằng các bộ chia quang (Passive Splitter) không cần nguồn điện, giúp giảm chi phí vận hành và bảo dưỡng."
  },
  {
    question: "Trong kiến trúc mạng PON, thiết bị OLT (Optical Line Terminal) thường được đặt ở đâu và có chức năng gì?",
    options: [
      "Đặt tại nhà khách hàng để chuyển đổi quang-điện",
      "Đặt tại tủ cáp ngoài đường để chia tín hiệu",
      "Đặt tại trung tâm (Central Office), đóng vai trò điều khiển toàn bộ hệ thống PON và kết nối với mạng lõi (Core Network)",
      "Đặt trên cột điện để khuếch đại tín hiệu"
    ],
    answer: "Đặt tại trung tâm (Central Office), đóng vai trò điều khiển toàn bộ hệ thống PON và kết nối với mạng lõi (Core Network)",
    explanation: "OLT là 'bộ não' của mạng PON đặt tại đài trạm. Nó thực hiện các chức năng lập lịch, cấp phát băng thông (DBA) và quản lý tất cả các ONU/ONT trong mạng."
  },
  {
    question: "Kỹ thuật đa truy nhập nào được sử dụng trong mạng PON để truyền dữ liệu theo hướng lên (Upstream) từ nhiều người dùng về trung tâm mà không gây xung đột?",
    options: [
      "Phát quảng bá (Broadcast)",
      "CSMA/CD (Đa truy nhập nhận biết sóng mang phát hiện xung đột)",
      "TDMA (Time Division Multiple Access - Đa truy nhập phân chia theo thời gian)",
      "Token Ring"
    ],
    answer: "TDMA (Time Division Multiple Access - Đa truy nhập phân chia theo thời gian)",
    explanation: "Do môi trường chia sẻ, để tránh xung đột dữ liệu khi nhiều nhà cùng gửi tin lên OLT, mạng PON sử dụng TDMA để cấp cho mỗi ONU một khe thời gian (time slot) riêng biệt."
  },
  {
    question: "Trong mô hình FTTx, kiến trúc nào đưa cáp quang đến tận thiết bị đầu cuối bên trong nhà thuê bao?",
    options: [
      "FTTC (Fiber To The Curb - Cáp quang đến lề đường)",
      "FTTN (Fiber To The Node - Cáp quang đến nút mạng)",
      "FTTH (Fiber To The Home - Cáp quang đến tận nhà)",
      "FTTB (Fiber To The Building - Cáp quang đến tòa nhà)"
    ],
    answer: "FTTH (Fiber To The Home - Cáp quang đến tận nhà)",
    explanation: "FTTH (Fiber To The Home) là mô hình mà sợi quang được kéo xuyên suốt từ nhà mạng đến tận thiết bị ONT đặt trong nhà khách hàng, cung cấp băng thông cao nhất."
  },
  {
    question: "Cơ chế truyền dữ liệu hướng xuống (Downstream) trong mạng GPON hoạt động như thế nào?",
    options: [
      "Dữ liệu được gửi riêng lẻ đến từng ONU (Point-to-Point)",
      "OLT phát quảng bá (Broadcast) toàn bộ dữ liệu đến tất cả các ONU; mỗi ONU sẽ lọc và chỉ lấy gói tin dành cho mình (dựa trên ID/mật mã)",
      "Sử dụng Token để chuyển dữ liệu lần lượt",
      "Dữ liệu đi theo vòng tròn qua từng nhà"
    ],
    answer: "OLT phát quảng bá (Broadcast) toàn bộ dữ liệu đến tất cả các ONU; mỗi ONU sẽ lọc và chỉ lấy gói tin dành cho mình (dựa trên ID/mật mã)",
    explanation: "Hướng xuống của PON hoạt động theo cơ chế Broadcast: tín hiệu ánh sáng đi qua bộ chia sẽ đến tất cả các nhánh. Để đảm bảo bảo mật, dữ liệu thường được mã hóa (AES) và mỗi ONU chỉ giải mã gói tin có ID của mình."
  },
  {
    question: "Thiết bị đo OTDR (Optical Time-Domain Reflectometer) được sử dụng chủ yếu để làm gì trong mạng truy nhập quang?",
    options: [
      "Đo tốc độ download/upload Internet",
      "Xác định vị trí điểm đứt cáp, đo suy hao của mối hàn, connector và chiều dài sợi quang",
      "Cấp nguồn cho thiết bị ONU",
      "Chuyển đổi tín hiệu quang sang wifi"
    ],
    answer: "Xác định vị trí điểm đứt cáp, đo suy hao của mối hàn, connector và chiều dài sợi quang",
    explanation: "OTDR là công cụ quan trọng nhất để bảo trì cáp quang. [cite: 40] Nó phát xung ánh sáng và đo tín hiệu phản xạ (backscatter/reflection) theo thời gian để vẽ nên 'bản đồ' của sợi cáp, giúp kỹ thuật viên biết chính xác vị trí đứt hoặc suy hao cao."
  },
  {
    question: "WDM-PON (Wavelength Division Multiplexing PON) ưu việt hơn TDM-PON (như GPON/EPON) ở điểm nào?",
    options: [
      "Giá thành rẻ hơn rất nhiều",
      "Mỗi người dùng được cấp một bước sóng riêng biệt, đảm bảo băng thông cực lớn và tính bảo mật cao, không phải chia sẻ thời gian",
      "Không cần sử dụng sợi quang",
      "Dễ lắp đặt hơn"
    ],
    answer: "Mỗi người dùng được cấp một bước sóng riêng biệt, đảm bảo băng thông cực lớn và tính bảo mật cao, không phải chia sẻ thời gian",
    explanation: "WDM-PON sử dụng công nghệ ghép bước sóng để tạo ra các kênh quang ảo (virtual point-to-point) cho từng người dùng[cite: 31]. Điều này loại bỏ việc chia sẻ băng thông và xung đột của TDM, nhưng chi phí thiết bị hiện tại còn cao."
  },
  {
    question: "Bộ chia quang (Optical Splitter) tỷ lệ 1:32 có nghĩa là gì?",
    options: [
      "Nó khuếch đại tín hiệu lên 32 lần",
      "Nó chia 1 tín hiệu đầu vào thành 32 tín hiệu đầu ra (hoặc gộp 32 vào 1), công suất tín hiệu bị chia nhỏ tương ứng",
      "Nó nối dài cáp quang thêm 32km",
      "Nó chuyển đổi tín hiệu cho 32 loại giao thức khác nhau"
    ],
    answer: "Nó chia 1 tín hiệu đầu vào thành 32 tín hiệu đầu ra (hoặc gộp 32 vào 1), công suất tín hiệu bị chia nhỏ tương ứng",
    explanation: "Bộ chia quang (Splitter) là thiết bị thụ động dùng để phân chia công suất quang[cite: 21]. Tỷ lệ 1:32 là tỷ lệ phổ biến trong GPON, cho phép 1 sợi quang từ OLT phục vụ 32 hộ gia đình."
  },
  {
    question: "Sự khác biệt chính giữa ONU (Optical Network Unit) và ONT (Optical Network Terminal) là gì?",
    options: [
      "Không có sự khác biệt, hai thuật ngữ này dùng thay thế cho nhau hoàn toàn",
      "ONT thường dùng cho FTTH (dành riêng cho 1 thuê bao), còn ONU thường dùng cho FTTB/FTTC (phục vụ nhiều thuê bao hoặc cả tòa nhà)",
      "ONT là thiết bị của nhà mạng, ONU là thiết bị khách hàng tự mua",
      "ONT dùng điện, ONU dùng pin"
    ],
    answer: "ONT thường dùng cho FTTH (dành riêng cho 1 thuê bao), còn ONU thường dùng cho FTTB/FTTC (phục vụ nhiều thuê bao hoặc cả tòa nhà)",
    explanation: "Theo chuẩn ITU-T, ONT là một trường hợp đặc biệt của ONU. ONT là thiết bị đầu cuối duy nhất cho 1 thuê bao (FTTH). [cite_start]ONU thường là thiết bị đặt tại lề đường/tòa nhà (FTTC/B) và cung cấp dịch vụ cho nhiều thuê bao qua các cổng dây đồng/LAN khác nhau[cite: 21]."
  },
  {
    question: "Chuẩn GPON (Gigabit PON) cung cấp tốc độ lý thuyết (Down/Up) phổ biến là bao nhiêu?",
    options: [
      "1.25 Gbps / 1.25 Gbps (Đối xứng)",
      "2.488 Gbps (Down) / 1.244 Gbps (Up) (Bất đối xứng)",
      "10 Gbps / 10 Gbps",
      "100 Mbps / 100 Mbps"
    ],
    answer: "2.488 Gbps (Down) / 1.244 Gbps (Up) (Bất đối xứng)",
    explanation: "GPON (ITU-T G.984) được thiết kế bất đối xứng để tối ưu cho nhu cầu tải xuống của người dùng Internet. [cite_start]Tốc độ tiêu chuẩn là xấp xỉ 2.5 Gbps hướng xuống và 1.25 Gbps hướng lên[cite: 23]."
  }


];

// DOM Elements
const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const retryBtn = document.getElementById('retry-btn');

// Quiz State
let currentQuestions = [];
let incorrectQuestions = [];

// Shuffle function (Hàm xáo trộn mảng)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize Quiz (Cập nhật phần này)
function initQuiz() {
    // 1. Tạo bản sao sâu (deep copy) của quizData để không làm hỏng dữ liệu gốc
    // Đồng thời xáo trộn thứ tự các câu hỏi
    const shuffledQuestions = shuffleArray(
        quizData.map(question => ({
            ...question,
            options: [...question.options] // Copy mảng options để xáo trộn không ảnh hưởng gốc
        }))
    );

    // 2. Xáo trộn thứ tự đáp án trong từng câu hỏi
    shuffledQuestions.forEach(question => {
        question.options = shuffleArray(question.options);
    });

    // 3. Gán số thứ tự hiển thị (1, 2, 3...)
    shuffledQuestions.forEach((q, i) => q.originalIndex = i);

    renderQuiz(shuffledQuestions);
}

// Render Quiz Questions
function renderQuiz(questions) {
    currentQuestions = questions;
    quizContainer.innerHTML = '';
    resultDiv.style.display = 'none';
    retryBtn.style.display = 'none';
    submitBtn.style.display = 'block';
    submitBtn.disabled = false;

    questions.forEach((item, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';

        // 1. Text câu hỏi
        const questionText = document.createElement('div');
        questionText.className = 'question';
        questionText.innerText = `${item.originalIndex + 1}. ${item.question}`;
        questionBlock.appendChild(questionText);

        // 2. Ảnh (Nếu có)
        if (item.image) {
            const imgElement = document.createElement('img');
            imgElement.src = item.image;
            imgElement.className = 'question-image'; 
            
            // Style inline cho ảnh
            imgElement.style.maxWidth = '100%';
            imgElement.style.display = 'block';
            imgElement.style.marginTop = '10px';
            imgElement.style.marginBottom = '15px';
            imgElement.style.borderRadius = '5px';

            imgElement.onerror = function() { this.style.display = 'none'; };
            questionBlock.appendChild(imgElement);
        }

        // 3. Các lựa chọn (Đã được xáo trộn ở initQuiz)
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';
        optionsDiv.dataset.questionIndex = index;
        optionsDiv.dataset.answered = 'false';

        item.options.forEach(optionText => {
            const optionDiv = document.createElement('div');
            optionDiv.innerText = optionText;
            optionDiv.addEventListener('click', () => handleOptionClick(optionDiv));
            optionsDiv.appendChild(optionDiv);
        });
        questionBlock.appendChild(optionsDiv);

        // 4. Phần Giải Thích (Mặc định ẩn)
        if (item.explanation) {
            const explanationDiv = document.createElement('div');
            explanationDiv.className = 'explanation';
            explanationDiv.innerHTML = `<strong>Giải thích:</strong> ${item.explanation}`;
            explanationDiv.style.display = 'none'; 
            questionBlock.appendChild(explanationDiv);
        }

        quizContainer.appendChild(questionBlock);
    });
}

// Handle Option Selection
function handleOptionClick(selectedOptionEl) {
    const optionsContainer = selectedOptionEl.parentNode;
    
    // Nếu đã trả lời rồi thì không làm gì cả
    if (optionsContainer.dataset.answered === 'true') return;
    
    // Đánh dấu đã trả lời
    optionsContainer.dataset.answered = 'true';
    const questionIndex = parseInt(optionsContainer.dataset.questionIndex);
    const questionData = currentQuestions[questionIndex];
    
    selectedOptionEl.classList.add('selected');
    
    // Kiểm tra đúng sai
    if (selectedOptionEl.innerText === questionData.answer) {
        selectedOptionEl.classList.add('correct');
    } else {
        selectedOptionEl.classList.add('wrong');
        // Hiện đáp án đúng
        Array.from(optionsContainer.children).forEach(opt => {
            if (opt.innerText === questionData.answer) {
                opt.classList.add('correct');
            }
        });
    }

    // Hiện giải thích (nếu có)
    const questionBlock = optionsContainer.parentNode;
    const explanationDiv = questionBlock.querySelector('.explanation');
    if (explanationDiv) {
        explanationDiv.style.display = 'block';
    }
}

// Submit Quiz
function submitQuiz() {
    submitBtn.disabled = true;
    incorrectQuestions = [];
    let score = 0;

    currentQuestions.forEach((item, index) => {
        const optionsContainer = quizContainer.querySelector(`.options[data-question-index='${index}']`);
        const correctChoice = optionsContainer.querySelector('.correct.selected');

        if (correctChoice) {
            score++;
        } else {
            incorrectQuestions.push(item);
        }
        
        // Vô hiệu hóa click cho tất cả options
        Array.from(optionsContainer.children).forEach(opt => {
            opt.style.pointerEvents = 'none';
        });
    });

    resultDiv.innerHTML = `Bạn đã trả lời đúng ${score} / ${currentQuestions.length} câu!`;
    resultDiv.style.display = 'block';
    resultDiv.scrollIntoView({ behavior: 'smooth' });

    if (incorrectQuestions.length > 0) {
        retryBtn.style.display = 'block';
    }
}

// Retry Incorrect Questions
function retryIncorrect() {
    // Lấy danh sách các câu sai
    const questionsToRetry = incorrectQuestions.map(q => {
        // Tạo bản sao mới để xáo trộn lại đáp án cho lần làm lại (tùy chọn)
        const newQ = { ...q, options: [...q.options] };
        newQ.options = shuffleArray(newQ.options);
        return newQ;
    });

    // Xáo trộn thứ tự các câu sai
    const shuffledRetry = shuffleArray(questionsToRetry);
    
    // Cập nhật lại chỉ số hiển thị
    // (Ở đây ta tìm vị trí gốc trong quizData để hiển thị "Câu X" cho đúng với ban đầu, hoặc đánh số lại từ 1)
    // Cách đơn giản nhất là đánh số lại từ 1 cho bài làm lại:
    shuffledRetry.forEach((q, i) => q.originalIndex = i);

    renderQuiz(shuffledRetry);
}

// Event Listeners
submitBtn.addEventListener('click', submitQuiz);
retryBtn.addEventListener('click', retryIncorrect);

// Initialize
initQuiz();