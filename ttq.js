const quizData = [
 {
    question: "Mạng truyền thông quang có bao nhiêu thế hệ mạng quang ?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "2"
  },
  {
    question: "Quá trình phát triển IP/WDM được chia ra làm mấy giai đoạn chính ?",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: "3"
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
    question: "Kí hiệu nào cho biết mạng hoạt động ở cơ chế bảo vệ dành riêng:",
    options: [
      "1 : 1",
      "1 + 1",
      "1 : N",
      "N : N"
    ],
    answer: "1 + 1"
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
    question: "Về cơ bản có bao nhiêu cách để tăng dung lượng truyền dẫn trên một sợi quang",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: "2"
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
    question: "Có bao nhiêu phương pháp kết chuỗi trong NG-SDH:",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: "2"
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
    answer: "2,667 Mbps"
  },
  {
    question: "Bài toán RWA là",
    options: [
      "Bài toán thiết kế kiến trúc tuyến quang",
      "Bài toán định tuyến và gán bước sóng",
      "Bài toán tối thiểu hóa số kết nối có thể thiết lập",
      "Cả 3 đáp án trên"
    ],
    answer: "Bài toán định tuyến và gán bước sóng"
  },
  {
    question: "Khi xảy ra chèn dương, các bit I, D trong con trỏ AU-4 PTR sẽ thay đổi:",
    options: [
      "5 bit I đảo dấu",
      "5 bit D đảo dấu",
      "5 bit I không thay đổi",
      "5 bit D không thay đổi"
    ],
    answer: "5 bit I đảo dấu"
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
    question: "Cho mạng quang có 5 nút (A, B, C, D và E) với 4 liên kết (AB, BC, CD, DE)... Kết quả nào sau đây là sai khi các bước sóng được gán theo giải thuật First-fit:",
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
    answer: "2"
  },
  {
    question: "Xét về mặt chức năng, một mạng có thể được xem như bao gồm mặt phẳng nào",
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
    answer: "3"
  },
  {
    question: "Trong cấu tạo con trỏ AU-4 PtR, các byte chèn âm là",
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
    question: "Trong những câu dưới đây, câu nào đúng cho kiến trúc mạng quang WDM hình sao",
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
      "Kết nối các nhóm CO trong một thành phố hoặc một vùng",
      "Kết nối giữa các thành phố hoặc các vùng khác nhau",
      "Khoảng các giữa các CO khoảng hàng trăm đến hàng ngàn km",
      "Cả 2 đáp án B và C"
    ],
    answer: "Cả 2 đáp án B và C"
  },
  {
    question: "10 bit giá trị con trỏ AU-4 khi không chèn là 0100111000. Tìm cấu trúc 10 bit giá trị con trỏ trong khung chèn dương:",
    options: [
      "0100111001",
      "IDIDIDIDID",
      "1110010010",
      "0001101101"
    ],
    answer: "1110010010"
  },
  {
    question: "10 bit giá trị con trỏ AU-4 khi không chèn là 0100111000. Tìm cấu trúc 10 bit giá trị con trỏ trong khung chèn âm:",
    options: [
      "0100111001",
      "IDIDIDIDID",
      "1110010010",
      "0001101101"
    ],
    answer: "0001101101"
  },
  {
    question: "10 bit giá trị con trỏ AU-4 khi không chèn là 0100111000. Tìm cấu trúc 10 bit giá trị con trỏ trong kung liền sau khung chèn âm:",
    options: [
      "0100111001",
      "0100110111",
      "1110010010",
      "0001101101"
    ],
    answer: "0100110111"
  },
  {
    question: "Quá trình phát triển mạng ghép theo bước sóng (WDM) có mấy thế hệ?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "3"
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
    answer: "3"
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
    answer: "2"
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
    answer: "3"
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
    answer: "80 - 120 km"
  },
  {
    question: "Phát biểu nào sau đây là sai với 3R?",
    options: [
      "Các bộ chuyển phát 3R đơn giản chỉ hoạt động cố định cho một tốc độ bit và giao thức khách hàng cụ thể",
      "Chức năng định thời (khôi phục đồng hồ) khó thực hiện cho các tốc độ bit khác nhau",
      "Các bộ chuyển phát khác nhau cần cho các tốc độ bit và các giao thức khác nhau",
      "Các bộ chuyển phát 3R đơn giản có thể hoạt động cho nhiều tốc độ bit và giao thức khách hàng cụ thể"
    ],
    answer: "Các bộ chuyển phát 3R đơn giản có thể hoạt động cho nhiều tốc độ bit và giao thức khách hàng cụ thể"
  },
  {
    question: "Phát biểu nào sau đây là sai với 1R?",
    options: [
      "Các bộ EDFA được sử dụng một cách tuần hoàn dọc tuyến sợi quang (khoảng cách 80-120 km)",
      "Đôi khi các bộ khuyếch đại Raman được sử dụng",
      "Tại mỗi node chỉ có thể có một tầng khuyếch đại EDFA",
      "Cấu hình tương tự theo hướng ngược lại"
    ],
    answer: "Tại mỗi node chỉ có thể có một tầng khuyếch đại EDFA"
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
    answer: "Lưới"
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
    answer: "Tất cả đáp án trên"
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
    answer: "3"
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
    question: "Chọn phát biểu sai khi nói về Tầng IP?",
    options: [
      "Cung cấp dịch vụ cho các tầng dưới",
      "Giao thức sử dụng là IP: thực hiện đóng gói dữ liệu, thoại và video thành các IP datagram, sau đó định hướng truyền qua mạng.",
      "Cung cấp các liên kết phi kết nối và có khả năng tự sửa lỗi",
      "Cung cấp tất cả các chức năng OAM&P để thiết lập và quản lý các kết nối qua mạng."
    ],
    answer: "Cung cấp tất cả các chức năng OAM&P để thiết lập và quản lý các kết nối qua mạng."
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
    answer: "3"
  },
  {
    question: "Cấu trúc WDM điểm-điểm có tên gọi khác là?",
    options: [
      "Cấu hình cố định",
      "Tái cấu hình",
      "Cấu hình chuyển mạch kênh",
      "Cấu hình chuyển mạch gói"
    ],
    answer: "Cấu hình cố định"
  },
  {
    question: "Cấu trúc WDM tái cấu hình có tên gọi khác là?",
    options: [
      "Cấu hình cố định",
      "Điểm - điểm",
      "Cấu hình chuyển mạch kênh",
      "Cấu hình chuyển mạch gói"
    ],
    answer: "Cấu hình chuyển mạch kênh"
  },
  {
    question: "Cấu trúc WDM chuyển mạch có tên gọi khác là?",
    options: [
      "Cấu hình cố định",
      "Điểm - điểm",
      "Cấu hình chuyển mạch kênh",
      "Cấu hình chuyển mạch gói"
    ],
    answer: "Cấu hình chuyển mạch gói"
  },
  {
    question: "IP/WDM có bao nhiêu mô hình dịch vụ?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: "2"
  },
  {
    question: "Hàm trọng số dựa trên chặng viết tắt là ?",
    options: [
      "HW",
      "DW",
      "AW",
      "TAW"
    ],
    answer: "HW"
  },
  {
    question: "Hàm trọng số dựa trên khoảng cách viết tắt là ?",
    options: [
      "HW",
      "DW",
      "AW",
      "TAW"
    ],
    answer: "DW"
  },
  {
    question: "Hàm trọng số dựa trên bước sóng sẵn có viết tắt là ?",
    options: [
      "AW",
      "HAW",
      "TAW",
      "HTAW"
    ],
    answer: "AW"
  },
  {
    question: "Hàm trọng số dựa trên số bước sóng sẵn có và số chặng viết tắt là ?",
    options: [
      "AW",
      "HAW",
      "TAW",
      "HTAW"
    ],
    answer: "HAW"
  },
  {
    question: "Hàm dựa trên tổng số bước sóng và số bước sóng sẵn có viết tắt là?",
    options: [
      "AW",
      "HAW",
      "TAW",
      "HTAW"
    ],
    answer: "TAW"
  },
  {
    question: "Hàm trọng số dựa trên số chặng, tổng số bước sóng và số bước sóng sẵn có viết tắt là?",
    options: [
      "AW",
      "HAW",
      "TAW",
      "HTAW"
    ],
    answer: "HTAW"
  },
  {
    question: "Kí hiệu nào cho biết mạng hoạt động ở cơ chế bảo vệ dành riêng:",
    options: [
      "1 : 1",
      "1 + 1",
      "1 : N",
      "N : N"
    ],
    answer: "1 + 1"
  },
  {
    question: "Kí hiệu nào cho biết mạng hoạt động ở cơ chế chia sẻ:",
    options: [
      "N + N",
      "1 + 1",
      "1 : N",
      "N : N"
    ],
    answer: "1 : N"
  },
  {
    question: "Kí hiệu nào cho biết mạng hoạt động ở cơ chế chia sẻ:",
    options: [
      "1 : 1",
      "1 + 1",
      "N + N",
      "N : N"
    ],
    answer: "1 : 1"
  },
  {
    question: "Bài toán RWA là",
    options: [
      "Bài toán thiết kế kiến trúc tuyến quang",
      "Bài toán định tuyến và gán bước sóng",
      "Bài toán tối thiểu hóa số kết nối có thể thiết lập",
      "Cả 3 đáp án trên"
    ],
    answer: "Bài toán định tuyến và gán bước sóng"
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
    question: "Xét về mặt chức năng, một mạng có thể được xem như bao gồm mặt phẳng nào",
    options: [
      "Mặt phẳng dữ liệu, mặt phẳng điều khiển, mặt phẳng quản lý",
      "Mặt phẳng điều khiển, mặt phẳng quản lý, mặt phẳng giám sát",
      "Mặt phẳng dữ liệu, mặt phẳng quản lý, mặt phẳng giám sát",
      "Mặt phẳng dữ liệu, mặt phẳng điều khiển, mặt phẳng giám sát"
    ],
    answer: "Mặt phẳng dữ liệu, mặt phẳng điều khiển, mặt phẳng quản lý"
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
    question: "Cho kiến trúc topo mạng quang có 8 nút (A, B, C, D, E, F, G và H)... Khi xác định đường đi từ nút A đến D, kết quả nào sau đây là sai khi được tính bởi hàm trọng số dựa trên tổng số bước song và số bước song sẵn có (TAW):",
    options: [
      "0,181 cho ABCD",
      "0,458 cho AFD",
      "0,196 cho AGHD",
      "0,25 cho AED"
    ],
    answer: "0,181 cho ABCD"
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
    question: "Nhận định nào sau đây là đúng về chức năng của lớp OTS",
    options: [
      "Quản lý các phần đoạn liên kết sợi quang giữa các phần tử quang như giữa bộ khuếch đại quang, hoặc các bộ khuếch đại quang và các bộ ghép WDM",
      "Không đáp án nào đúng",
      "Quản lý các kết nối quang giữa các bộ lặp 3R",
      "Quản lý các liên kết sợi quang giữa các bộ ghép kênh và bộ chuyển mạch quang"
    ],
    answer: "Quản lý các phần đoạn liên kết sợi quang giữa các phần tử quang như giữa bộ khuếch đại quang, hoặc các bộ khuếch đại quang và các bộ ghép WDM"
  },
  {
    question: "Trong bài toán RWA của mạng OCS, điều kiện những kết nối chia sẻ chung một sợi quang phải sử dụng những bước sóng khác nhau gọi là",
    options: [
      "Ràng buộc giới hạn số bước sóng trong mạng quang",
      "Ràng buộc về tính liệu tục bước sóng",
      "Ràng buộc về gán kênh riêng biệt",
      "Ràng buộc về tối ưu hóa việc sử dụng tài nguyên mạng"
    ],
    answer: "Ràng buộc về gán kênh riêng biệt"
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
      "OLT",
      "ONU",
      "Coupler",
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
    answer: "Hàng 1, cột 1 – 7"
  },
  {
    question: "Mào đầu đồng bộ khung OPU OH nằm ở đầu trong mào đầu kênh quang (Och OH):",
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
    options: [
      "Tại nút 1 và nút 4 thực hiện chuyển mạch bảo vệ để chuyển lưu lượng hoạt động tại sợi W1 sang phần dung lượng dự phòng tại sợi W2",
      "Tại nút 5 và nút 6 thực hiện chuyển mạch bảo vệ để chuyển lưu lượng hoạt động tại sợi W1 sang phần dung lượng dự phòng tại sợi W2",
      "Tại nút 5 và 6 thực hiện chuyển mạch bảo vệ để chuyển dữ liệu tại sợi hoạt động W1 sang sợi dự phòng W2",
      "Tại nút 1 và nút 4 thực hiện chuyển mạch bảo vệ để chuyển dữ liệu tại sợi hoạt động W1 sang sợi dự phòng W2"
    ],
    answer: "Tại nút 1 và nút 4 thực hiện chuyển mạch bảo vệ để chuyển lưu lượng hoạt động tại sợi W1 sang phần dung lượng dự phòng tại sợi W2"
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
    question: "Bảo vệ lớp vật lý trong mạng quang được thực hiện tại ?",
    options: [
      "MPLS,Ethernet",
      "IP",
      "lớp liên kết dữ liệu",
      "Lớp NG-SDH, OTN và các lớp quang"
    ],
    answer: "Lớp NG-SDH, OTN và các lớp quang"
  },
  {
    question: "Điều khiển nào được sử dụng trong mạng ASON ?",
    options: [
      "Điều khiển ngang hàng",
      "Mô hình điều khiển tăng cường",
      "Điều khiển xếp chồng",
      "tất cả các kiểu trên"
    ],
    answer: "Điều khiển xếp chồng"
  },
  {
    question: "Dạng định tuyến trong mạng GMPLS IP/WDM dựa trên các giao thức:",
    options: [
      "GMPLS",
      "IPSEC",
      "OSPF-TE/ISIS-TE",
      "RSVP,RSVP mở rộng"
    ],
    answer: "OSPF-TE/ISIS-TE"
  },
  {
    question: "Dạng báo hiệu trong mạng GMPLS IP/WDM dựa trên các giao thức:",
    options: [
      "GMPLS",
      "IPSEC",
      "OSPF-TE/ISIS-TE",
      "RSVP,RSVP mở rộng LDP"
    ],
    answer: "RSVP,RSVP mở rộng LDP"
  },
  {
    question: "Dữ liệu trong mạng quang được thực hiện tại lớp",
    options: [
      "Lớp ứng dụng",
      "Lớp vật lý lớp điều khiển mạng",
      "Lớp dữ liệu lớp thực hiện mạng",
      "Lớp liên kết dữ liệu, lớp điều khiển mạng"
    ],
    answer: "Lớp vật lý lớp điều khiển mạng"
  },
  {
    question: "Tầng WDM gồm mấy lớp",
    options: [
      "3",
      "2",
      "1",
      "4"
    ],
    answer: "3"
  },
  {
    question: "Giao thức của mp dữ liệu là",
    options: [
      "Quản lý kết nối giám sát hiệu năng và tăng Cường thời gian sống sót của mạng",
      "Truyền tải dữ liệu qua mạng và tăng cường thời gian sống sót của mạng",
      "Quản lý kết nối giám sát hiệu năng",
      "Truyền tải dữ liệu trong mạng"
    ],
    answer: "Truyền tải dữ liệu trong mạng"
  },
  {
    question: "Dịch vụ mạng Quang gồm mấy phần chính",
    options: [
      "3",
      "1",
      "2",
      "4"
    ],
    answer: "2"
  },
  {
    question: "Xét về mặt chức năng mỗi mạng có thể được xem bao gồm những mặt phẳng nào?",
    options: [
      "Mặt phẳng dữ liệu mặt phẳng điều khiển mặt phẳng quản lý",
      "Mặt phẳng điều khiển mặt phẳng quản lý mặt phẳng giám sát",
      "Mặt phẳng dữ liệu mặt phẳng quản lý mặt phẳng giám sát",
      "Mặt phẳng dữ liệu mặt phẳng điều khiển mặt phẳng giám sát"
    ],
    answer: "Mặt phẳng dữ liệu mặt phẳng điều khiển mặt phẳng quản lý"
  },
  {
    question: "Mô hình kết nối mạng IP/WDM gồm mấy loại chính",
    options: [
      "4",
      "3",
      "1",
      "2"
    ],
    answer: "3"
  },
  {
    question: "Trong quản lý mạng quang quản lý lỗi được hiểu là",
    options: [
      "Giám sát và quản lý các tham số hiệu năng",
      "Phát hiện sự cố và cô lập thành phần lỗi",
      "Điều khiển chuyên nhập tới các NE, Bảo vệ dữ liệu nội dung xác thực người dùng",
      "Quản lý Thiết bị kết nối Thích ứng đến sự thay đổi mạng"
    ],
    answer: "Phát hiện sự cố và cô lập thành phần lỗi"
  },
  {
    question: "Tiêu chí nào là quan trọng nhất để đánh giá khả năng Bảo vệ và phục hồi của mạng Quang",
    options: [
      "Thời gian phục hồi mạng nhanh nhất",
      "Lưu lượng chuyển tài bị mất là nhỏ nhất",
      "Hậu quả pháp lý ít nhất",
      "Tổn thất lợi nhuận nhỏ nhất"
    ],
    answer: "Thời gian phục hồi mạng nhanh nhất"
  },
  {
    question: "Kiến trúc mạng quang WDM gồm mấy tp chính",
    options: [
      "2",
      "5",
      "3",
      "4"
    ],
    answer: "3"
  },
  {
    question: "Chức năng chính của mặt phẳng quản lý và mặt phẳng điều khiển là",
    options: [
      "Chịu trách nhiệm quản lý kết nối giám sát hiệu năng",
      "Chịu trách nhiệm quản lý kết nối giám sát hiệu năng Và tăng cường khả năng sống sót của mạng",
      "Chịu trách nhiệm truyền tải dữ liệu qua mạng và tăng cường khả năng sống sót của mạng",
      "Chịu trách nhiệm truyền tải dữ liệu qua mạng"
    ],
    answer: "Chịu trách nhiệm quản lý kết nối giám sát hiệu năng Và tăng cường khả năng sống sót của mạng"
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
      "Sử dụng giao thức bảo vệ chuyển mạch định tuyến nhanh Để tạo đường hầm dự phòng"
    ],
    answer: "Sử dụng giao thức cây mở rộng giao thức cây mở rộng nhanh hoặc giao thức APS cho chuyển mạch bảo vệ tuyến liền mạch bảo vệ cho mạng vòng"
  },
  {
    question: "Có các cơ chế duy trì mạng nào",
    options: [
      "Cascade",
      "Đầu cuối - đầu cuối",
      "Giữa các tầng đoạn khu vực",
      "All"
    ],
    answer: "All"
  },
  {
    question: "Mạng quang là gì?",
    options: [
      "Cascade",
      "Một hệ thống truyền tải dữ liệu dựa trên sọi quang",
      "Giữa các tầng đoạn khu vực",
      "All"
    ],
    answer: "Một hệ thống truyền tải dữ liệu dựa trên sọi quang"
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
      "Chỉ tăng tốc độ bit bằng phương pháp ghép kênh phân chia thời gian (TDM)",
      "Chỉ sử dụng phương pháp ghép kênh theo bước sóng quang (WDM)",
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
    answer: "Sử dụng mạng quang thụ động (PON)"
  },
  {
    question: "Hiệu năng mạng truyền thông quang bao gồm những loại hiệu năng nào?",
    options: [
      "Hiệu năng lưu lượng, hiệu năng dịch vụ và hiệu năng liên kết",
      "Hiệu năng phần cứng, hiệu năng phần mềm và hiệu năng người dùng",
      "Hiệu năng quang, hiệu năng điện và hiệu năng cơ khí",
      "Hiệu năng phát, hiệu năng thu và hiệu năng trung gian"
    ],
    answer: "Hiệu năng lưu lượng, hiệu năng dịch vụ và hiệu năng liên kết"
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
    ]
  },
  {
    question: "Lớp SDH bao gồm những lớp con nào?",
    options: [
      "Lớp tuyển, lớp đoạn ghép, lớp đoạn lặp, lớp vật lý",
      "Lớp vật lý, lớp liên kết dữ liệu, lớp mạng, lớp ứng dụng",
      "Lớp quang, lớp điện, lớp vô tuyến, lớp vệ tinh",
      "Lớp kênh, lớp truyền dẫn, lớp phân phối, lớp người dùng"
    ],
    answer: "Lớp tuyển, lớp đoạn ghép, lớp đoạn lặp, lớp vật lý"
  },
  {
    question: "Lớp SONET bao gồm những lớp con nào?",
    options: [
      "Lớp tuyến, lớp đường, lớp đoạn và lớp vật lý",
      "Lớp lõi, lớp biên, lớp truy nhập và lớp ứng dụng",
      "Lớp server, lớp client, lớp database và lớp mạng",
      "Lớp ATM, lớp IP, lớp Ethernet và lớp vật lý"
    ],
    answer: "Lớp tuyến, lớp đường, lớp đoạn và lớp vật lý"
  },
  {
    question: "Dựa trên khoảng cách mục tiêu, lớp vật lý SDH có thể phân loại thành các ứng dụng khác nhau nào?",
    options: [
      "Kết nối nội bộ",
      "Kết nối cự li ngắn, kết nối cự li dài, rất dài và cực dài",
      "Cả A và B đúng",
      "Chỉ kết nối vệ tinh và vi ba"
    ],
    answer: "Cả A và B đúng"
  },
  {
    question: "LCAS là gì?",
    options: [
      "Giao thức điều chỉnh linh hoạt băng thông",
      "Giao thức định tuyến gói tin trên mạng quang",
      "Cơ chế mã hóa tín hiệu đường truyền",
      "Chuẩn giao tiếp giữa OLT và ONU"
    ],
    answer: "Giao thức điều chỉnh linh hoạt băng thông"
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
    answer: "Để quản lý phân bổ băng thông của tuyến VCAT"
  },
  {
    question: "Cấu tạo của khối AU-4 bao gồm?",
    options: [
      "VC-4 và con trỏ AU-4",
      "VC-3 và mào đầu đường",
      "Container C-4 và mào đầu đoạn",
      "Chỉ bao gồm vùng tải trọng"
    ],
    answer: "VC-4 và con trỏ AU-4"
  },
  {
    question: "Báo hiệu trong mạng quang được thực hiện tại các lớp:",
    options: [
      "Lớp vật lý, lớp điều khiển mạng",
      "Lớp liên kết dữ liệu, lớp điều khiển mạng",
      "Lớp ứng dụng, lớp điều khiển mạng",
      "Cả 3 đáp án trên"
    ],
    answer: "Lớp liên kết dữ liệu, lớp điều khiển mạng"
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
    answer: "Đỉnh 1: bước sóng 1, Đỉnh 2: bước sóng 2, Đỉnh 3: bước sóng 1, Đỉnh 5: bước sóng 2"
  },
  {
    question: "Bài toán LTD là:",
    options: [
      "Bài toán thiết kế kiến trúc tuyến quang (Lightpath)",
      "Bài toán gán bước sóng",
      "Bài toán định tuyến bước sóng",
      "Cả 3 đáp án trên"
    ],
    answer: "Bài toán thiết kế kiến trúc tuyến quang (Lightpath)"
  },
  {
    question: "Mô hình kết nối mạng IP/WDM bao gồm mấy loại chính:",
    options: [
      "2",
      "1",
      "3",
      "4"
    ],
    answer: "2"
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
    question: "Kiến trúc mạng quang WDM gồm có mấy loại chính:",
    options: [
      "3",
      "4",
      "2",
      "5"
    ],
    answer: "3" // Thường bao gồm: Điểm-Điểm (Point-to-Point), Ring, Mesh.
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
    question: "Trong kiến trúc truyền tải IP/WDM bao gồm mấy lớp:",
    options: [
      "1",
      "3",
      "2",
      "4"
    ],
    answer: "2" // Lớp IP và Lớp Quang (Optical Layer).
  },
  {
    question: "Xét về mặt chức năng, một mạng có thể được xem như bao gồm mặt phẳng nào:",
    options: [
      "Mặt phẳng dữ liệu, mặt phẳng điều khiển, mặt phẳng giám sát",
      "Mặt phẳng dữ liệu, mặt phẳng điều khiển, mặt phẳng quản lý",
      "Mặt phẳng dữ liệu, mặt phẳng quản lý, mặt phẳng giám sát",
      "Mặt phẳng điều khiển, mặt phẳng quản lý, mặt phẳng giám sát"
    ],
    answer: "Mặt phẳng dữ liệu, mặt phẳng điều khiển, mặt phẳng quản lý" // Data, Control, Management Planes.
  },
  {
    question: "Mô hình điều khiển nào được sử dụng trong ASON:",
    options: [
      "Mô hình điều khiển ngang hàng (Peer)",
      "Mô hình điều khiển tăng cường (Augmented)",
      "Mô hình điều khiển xếp chồng (Overlay)",
      "Tất cả mô hình trên"
    ],
    answer: "Tất cả mô hình trên"
  },
  {
    question: "Một mạng IP/WDM có thể hỗ trợ mấy mô hình dịch vụ chính:",
    options: [
      "3",
      "2",
      "4",
      "1"
    ],
    answer: "3" // Thường là: Permanent (Tĩnh), Soft-Permanent (Bán tĩnh), Switched (Chuyển mạch).
  },
  {
    question: "Mô hình định cỡ thống kê gồm có mấy mô hình chính:",
    options: [
      "2",
      "1",
      "4",
      "3"
    ],
    answer: "2"
  },
  {
    question: "Hoạt động định tuyến trong mạng GMPLS IP/WDM dựa trên các giao thức:",
    options: [
      "ASON, GMPLS",
      "OSPF-TE, IS-IS-TE",
      "IPSEC",
      "RSVP, RSVP mở rộng"
    ],
    answer: "OSPF-TE, IS-IS-TE" // RSVP-TE là giao thức Báo hiệu (Signaling), còn OSPF-TE/IS-IS-TE là Định tuyến (Routing).
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
    answer: "2" // Thường là cấu hình Điểm - Điểm (P2P) và cấu hình Sao chủ động (Active Star).
  },
  {
    question: "Bảo vệ tại lớp mạng trong mạng quang được thực hiện tại:",
    options: [
      "Lớp kênh quang",
      "Lớp NG-SDH, OTN và các lớp quang",
      "Lớp IP",
      "Lớp MPLS, Ethernet"
    ],
    answer: "Lớp NG-SDH, OTN và các lớp quang"
  },
  {
    question: "Giải pháp chủ yếu bảo vệ trong lớp IP là:",
    options: [
      "Khi mạng gặp sự cố, tất cả các bộ định tuyến có trên mạng được dừng hoạt động để thực hiện cập nhật bảng định tuyến",
      "Khi mạng gặp sự cố, các gói tạm dừng truyền đi cho đến khi định tuyến mới được thực hiện",
      "Sử dụng định tuyến động, từng chặng. Khi mạng gặp sự cố, giao thức định tuyến hoạt động và cập nhật các bảng định tuyến tại mỗi bộ định tuyến",
      "Sử dụng định tuyến tĩnh, thiết lập sẵn tuyến bảo vệ cho tuyến hoạt động"
    ],
    answer: "Sử dụng định tuyến động, từng chặng. Khi mạng gặp sự cố, giao thức định tuyến hoạt động và cập nhật các bảng định tuyến tại mỗi bộ định tuyến"
  },
  {
    question: "Có các cơ chế duy trì mạng nào:",
    options: [
      "Tổ hợp (xếp chồng duy trì kết nối và duy trì cascade)",
      "Duy trì cascade (nối tầng giữa các tầng/ đoạn/ khu vực)",
      "Duy trì kết nối đầu cuối - đầu cuối",
      "Cả 3 đáp án trên"
    ],
    answer: "Cả 3 đáp án trên"
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
    answer: "19,56 dB" // Loss = 10*log(64) + 1.5 = 18.06 + 1.5 = 19.56 dB.
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
    answer: "1:N" // 1+1 là bảo vệ 1-1 (Dedicated), 1:N là bảo vệ chia sẻ (Shared).
  },
  {
    question: "NG - PON1 có tốc độ hướng lên là:",
    options: [
      "2,5 Gbit/s",
      "2 Gbit/s",
      "5 Gbit/s",
      "1,25 Gbit/s"
    ],
    answer: "2,5 Gbit/s" // XG-PON (NG-PON1): Down 10G / Up 2.5G.
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
    question: "Trong mạng PON các thành phần tích cực là:",
    options: [
      "OLT",
      "ONU",
      "Coupler",
      "Cả 2 đáp án A, B (OLT và ONU)"
    ],
    answer: "Cả 2 đáp án A, B (OLT và ONU)"
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
    question: "Cơ chế bảo vệ nào yêu cầu phải sử dụng giao thức APS (chuyển mạch bảo vệ tự động) để thực thi:",
    options: [
      "Cơ chế bảo vệ chia sẻ",
      "Cả cơ chế bảo vệ chia sẻ và cơ chế bảo vệ dành riêng",
      "Chỉ trong cơ chế bảo vệ chia sẻ 1:N",
      "Cơ chế bảo vệ dành riêng"
    ],
    answer: "Cơ chế bảo vệ chia sẻ"
  },
  {
    question: "Mô hình tham chiếu mạng truy nhập quang có bao nhiêu điểm tham chiếu:",
    options: [
      "2",
      "5",
      "4",
      "3"
    ],
    answer: "4"
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
    question: "Cơ chế bảo vệ nào yêu cầu phải sử dụng giao thức APS (chuyển mạch bảo vệ tự động) để thực thi:",
    options: [
      "Cả cơ chế bảo vệ chia sẻ và cơ chế bảo vệ dành riêng",
      "Cơ chế bảo vệ dành riêng",
      "Chỉ trong cơ chế bảo vệ chia sẻ 1:N",
      "Cơ chế bảo vệ chia sẻ"
    ],
    answer: "Cơ chế bảo vệ chia sẻ"
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
    answer: "1+1"
  },
];

// DOM Elements
const quizContainer = document.getElementById('quiz-container');
const submitBtn = document.getElementById('submit-btn');
const resultDiv = document.getElementById('result');
const retryBtn = document.getElementById('retry-btn');

// Quiz State
let currentQuestions = [];
let incorrectQuestions = [];

// Shuffle function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize Quiz
function initQuiz() {
    // Xáo trộn các câu hỏi
    const shuffledQuizData = shuffleArray(quizData);
    
    // Xáo trộn các đáp án trong mỗi câu
    shuffledQuizData.forEach(q => {
        q.options = shuffleArray(q.options);
    });
    
    shuffledQuizData.forEach((q, i) => q.originalIndex = i);
    renderQuiz(shuffledQuizData);
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

        const questionText = document.createElement('div');
        questionText.className = 'question';
        questionText.innerText = `${item.originalIndex + 1}. ${item.question}`;
        questionBlock.appendChild(questionText);

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
        quizContainer.appendChild(questionBlock);
    });
}

// Handle Option Selection
function handleOptionClick(selectedOptionEl) {
    const optionsContainer = selectedOptionEl.parentNode;
    if (optionsContainer.dataset.answered === 'true') return;
    
    optionsContainer.dataset.answered = 'true';
    const questionIndex = parseInt(optionsContainer.dataset.questionIndex);
    const questionData = currentQuestions[questionIndex];
    
    selectedOptionEl.classList.add('selected');
    
    if (selectedOptionEl.innerText === questionData.answer) {
        selectedOptionEl.classList.add('correct');
    } else {
        selectedOptionEl.classList.add('wrong');
        Array.from(optionsContainer.children).forEach(opt => {
            if (opt.innerText === questionData.answer) {
                opt.classList.add('correct');
            }
        });
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
    incorrectQuestions.forEach(q => delete q.originalIndex);
    quizData.forEach((q, i) => q.originalIndex = i);
    const retryQuestions = incorrectQuestions.map(q => ({
        ...q,
        originalIndex: quizData.findIndex(qd => qd.question === q.question)
    }));
    renderQuiz(retryQuestions);
}

// Event Listeners
submitBtn.addEventListener('click', submitQuiz);
retryBtn.addEventListener('click', retryIncorrect);

// Initialize
initQuiz();