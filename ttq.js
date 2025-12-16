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
    answer: "5"
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
      "2 phương pháp (Kết chuỗi liền kề và Kết chuỗi ảo)",
      "3 phương pháp",
      "4 phương pháp",
      "5 phương pháp"
    ],
    answer: "2 phương pháp (Kết chuỗi liền kề và Kết chuỗi ảo)"
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
    answer: "Thiết bị đầu cuối (Path Termination)"
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
    question: "Trong bài toán RWA của mạng OCS, điều kiện những kết nối chia sẻ chung một sợi quang phải sử dụng những bước sóng khác nhau gọi là",
    options: [
      "Ràng buộc giới hạn số bước sóng trong mạng quang",
      "Ràng buộc về tính liên tục bước sóng",
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
    image: "./image/cau125.png",
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
    ],
    answer: "Sắp xếp, chèn, ghép kênh, bổ sung mào đầu và đồng chỉnh"
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
    answer: "2"// Thường là: Permanent (Tĩnh), Soft-Permanent (Bán tĩnh), Switched (Chuyển mạch).
  },
  {
    question: "Mô hình định cỡ thống kê gồm có mấy mô hình chính:",
    options: [
      "2",
      "1",
      "4",
      "3"
    ],
    answer: "3"
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
    answer: "Nền tảng cung cấp đa dịch vụ"
  },
  {
    question: "MSTP là gì?",
    options: [
      "Nền tảng truyền tải đa dịch vụ (Multi-Service Transport Platform)",
      "Nền tảng kiểm tra giám sát dịch vụ",
      "Giao thức cây bao trùm (Spanning Tree Protocol)",
      "Nền tảng chuyển mạch nhãn đa giao thức"
    ],
    answer: "Nền tảng truyền tải đa dịch vụ"
  },
  {
    question: "MSSP là gì?",
    options: [
      "Nền tảng chuyển mạch đa dịch vụ (Multi-Service Switching Platform)",
      "Nền tảng lưu trữ dữ liệu tập trung",
      "Hệ thống bảo mật đa lớp",
      "Giao thức đồng bộ hóa mạng quang"
    ],
    answer: "Nền tảng chuyển mạch đa dịch vụ"
  },
  {
    question: "OTN là gì?",
    options: [
      "Là mạng hướng kết nối gồm một tập mạng quang được kết nối bởi liên kết sợi quang",
      "Là mạng chuyển mạch gói dựa trên giao thức IP",
      "Là mạng truy nhập không dây băng rộng",
      "Là mạng cục bộ sử dụng cáp đồng trục"
    ],
    answer: "Là mạng hướng kết nối gồm một tập mạng quang được kết nối bởi liên kết sợi quang"
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
      "Lớp OPU, lớp ODU, lớp OTU",
      "Lớp OTS, lớp OMS, lớp OCh",
      "Lớp VC-12, lớp VC-3, lớp VC-4",
      "Lớp MPLS, lớp IP, lớp Ethernet"
    ],
    answer: "Lớp OPU, lớp ODU, lớp OTU"
  },
  {
    question: "Phân cấp OTN theo miền quang bao gồm những lớp nào?",
    options: [
      "Lớp OTS, lớp OMS, lớp OCh",
      "Lớp OPU, lớp ODU, lớp OTU",
      "Lớp Physical, lớp Data Link, lớp Network",
      "Lớp Regenerator, lớp Multiplexer, lớp Path"
    ],
    answer: "Lớp OTS, lớp OMS, lớp OCh"
  },
  {
    question: "Nhận định nào sau đây là đúng về chức năng của lớp OTS?",
    options: [
      "Quản lý các phân đoạn liên kết sợi quang giữa các phần tử quang như giữa các bộ khuếch đại quang, hoặc các bộ khuếch đại quang và các bộ ghép kênh WDM",
      "Quản lý luồng dữ liệu khách hàng và đóng gói vào khung",
      "Quản lý việc định tuyến bước sóng trong toàn mạng",
      "Giám sát lỗi bit của tín hiệu điện trước khi chuyển đổi quang"
    ],
    answer: "Quản lý các phân đoạn liên kết sợi quang giữa các phần tử quang như giữa các bộ khuếch đại quang, hoặc các bộ khuếch đại quang và các bộ ghép kênh WDM"
  },
  {
    question: "Nhận định nào sau đây là đúng về chức năng của lớp OMS?",
    options: [
      "Quản lý các liên kết sợi quang giữa các bộ ghép kênh và bộ chuyển mạch quang",
      "Quản lý kết nối vật lý của từng sợi quang đơn lẻ",
      "Điều khiển việc sửa lỗi hướng thuận (FEC)",
      "Thực hiện chức năng chuyển mạch gói tin IP"
    ],
    answer: "Quản lý các liên kết sợi quang giữa các bộ ghép kênh và bộ chuyển mạch quang."
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
    answer: "Cung cấp các kết nối quang giữa các bộ lặp 3R, cung cấp nhận dạng kết nối quang, giám sát hiệu năng BER."
  },
  {
    question: "Chức năng của lớp ODU là gì?",
    options: [
      "Hỗ trợ giám sát kết nối cung cấp nhận dạng, giám sát hiệu năng BER, truyền các chỉ thị báo cảnh và cung cấp các kênh truyền thông đến các điểm kết cuối",
      "Chuyển đổi tín hiệu quang sang tín hiệu điện",
      "Thiết lập các đường hầm VPN trên mạng",
      "Quản lý công suất phát của laser"
    ],
    answer: "Hỗ trợ giám sát kết nối cung cấp nhận dạng, giám sát hiệu năng BER, truyền các chỉ thị báo cảnh và cung cấp các kênh truyền thông đến các điểm kết cuối."
  },
  {
    question: "Chức năng của lớp OPU là gì?",
    options: [
      "Điều chỉnh các tín hiệu khách hàng với các khung OTN (là lớp con của ODU)",
      "Thực hiện sửa lỗi hướng thuận FEC cho toàn bộ khung",
      "Quản lý việc ghép bước sóng WDM",
      "Giám sát lỗi đường truyền vật lý"
    ],
    answer: "điều chỉnh các tín hiệu khách hàng với các khung OTN (là lớp con của ODU)"
  },
  {
    question: "Cấu trúc khung kênh quang OTN bao gồm những phần chính nào?",
    options: [
      "Mào đầu kênh quang (OCh OH), Tải trọng khách hàng (Client) và Sửa lỗi hướng thuận FEC",
      "Chỉ bao gồm phần tải trọng dữ liệu (Payload)",
      "Mào đầu IP, dữ liệu TCP và phần kiểm tra lỗi CRC",
      "Preamble, địa chỉ MAC nguồn/đích và dữ liệu"
    ],
    answer: "Mào đầu kênh quang (OCh OH), Tải trọng khách hàng (Client) và Sửa lỗi hướng thuận FEC."
  },
  {
    question: "Khung OPU-k có cấu trúc như thế nào?",
    options: [
      "Bao gồm các phần: Tiêu đề OPU-k , tải tin người dùng",
      "Bao gồm: FAS, MFAS và FEC",
      "Bao gồm: Tiêu đề ODU, Tiêu đề OTU và Payload",
      "Chỉ bao gồm phần sửa lỗi FEC"
    ],
    answer: "Bao gồm các phần: Tiêu đề OPU-k , tải tin người dùng."
  },
  {
    question: "Khung OTU-k có cấu trúc như thế nào?",
    options: [
      "Bao gồm các phần: FAS/MFAS, Tiêu đề OTU-k, Tiêu đề ODU-k, tiêu đề OPU-k, tải tin người dùng, FEC",
      "Chỉ bao gồm tải tin người dùng và FEC",
      "Bao gồm tiêu đề OPU-k và tải tin người dùng",
      "Bao gồm mào đầu đoạn và mào đầu đường"
    ],
    answer: "Bao gồm các phần: FAS/MFAS, Tiêu đề OTU-k, Tiêu đề ODU-k, tiêu đề OPU-k, tải tin người dùng, FEC."
  },
  {
    question: "Có bao nhiêu cách để tăng dung lượng truyền dẫn trên 1 sợi quang?",
    options: [
      "2",
      "5",
      "10",
      "1"
    ],
    answer: "2"
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
    question: "10 bit giá trị con trỏ AU-4 khi không chèn là 0100111000. Tìm cấu trúc 10 bít giá trị con trỏ trong khung liền sau khi chèn âm:",
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
    question: "Nhận định nào sau đây là đúng về cấu trúc khung OTU-k:",
    options: [
      "4 dòng x 4080 cột",
      "4 dòng x 3810 cột",
      "4 dòng x 3824 cột",
      "270 dòng x 9 cột"
    ],
    answer: "4 dòng x 4080 cột"
  },
  {
    question: "Giá trị k trong cấu trúc khung OPU-k, ODU-k, OTU-k là:",
    options: [
      "Cả 1, 2, 3",
      "Chỉ 1",
      "Chỉ 1 và 2",
      "1, 2, 3 và 4"
    ],
    answer: "Cả 1,2,3."
  },
  {
    question: "Hãy xác định tốc độ truyền của tín hiệu OTU-1 khi biết chu kỳ khung là 48,971 us:",
    options: [
      "2,667Mbps",
      "155 Mbps",
      "10 Gbps",
      "40 Gbps"
    ],
    answer: "2,667Mbps."
  },
  {
    question: "Những chức năng của điều khiển mạng quang bao gồm:",
    options: [
      "Quản lý hiệu năng, quản lý lỗi, quản lý cấu hình",
      "Quản lý bảo mật và quản lý cước",
      "Chỉ bao gồm quản lý định tuyến và bước sóng",
      "Cả 2 ý trên đều đúng (Bao gồm hiệu năng, lỗi, cấu hình, bảo mật, cước)"
    ],
    answer: "Cả 2 ý trên đều đúng (Bao gồm hiệu năng, lỗi, cấu hình, bảo mật, cước)"
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
    question: "Thuật ngữ 'duy trì mạng quang' (Network Survivability) là gì?",
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
    question: "Các cơ chế duy trì mạng quang có thể bao gồm?",
    options: [
      "Duy trì Đầu cuối - Đầu cuối",
      "Duy trì tại Cascade",
      "Xếp chồng các khả năng tồn tại",
      "Tất cả các cơ chế trên"
    ],
    answer: "Tất cả các cơ chế trên"
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
    answer: "Bảo vệ chia sẻ"
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
      "Chi phí lắp đặt, bảo dưỡng, thiết bị đầu cuối lớn",
      "Thiết bị đầu cuối còn đắt nên không phải lúc nào cũng phù hợp",
      "Tốc độ truyền dẫn thấp hơn cáp đồng",
      "Cả 2 ý đầu tiên đều đúng"
    ],
    answer: "Cả 2 ý đầu tiên đều đúng"
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
      "Quản lý báo hiệu và thông tin giám sát từ ONU, cung cấp chức năng bảo dưỡng",
      "Cung cấp giao diện quang phía mạng với ODN và giao diện phía mạng dịch vụ",
      "Chỉ có chức năng cấp nguồn cho hệ thống",
      "Cả A và B đều đúng"
    ],
    answer: "Cả A và B đều đúng"
  },
  {
    question: "Cấu trúc của khối chức năng OLT trong mạng FTTx gồm:",
    options: [
      "Khối thích ứng dịch vụ",
      "Khối kết nối chéo, MAC và Lớp PMD",
      "Chỉ bao gồm khối nguồn và vỏ máy",
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
      "Tất cả các ý trên đều đúng"
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
      "Sợi được kéo tới một ONU đặt trong tòa nhà (< 20km).",
      "Sử dụng cáp đồng từ tòa nhà đến từng hộ (thường < 10m).",
      "Khách hàng truy nhập Internet kết nối đến ONU thông qua mạng LAN.",
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
    answer: "Các chuẩn GPON, EPON, BPON và WDM PON"
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

];

/// DOM Elements
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
    // Gán chỉ số hiển thị theo thứ tự đã xáo
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

        // 1. Hiển thị nội dung câu hỏi
        const questionText = document.createElement('div');
        questionText.className = 'question';
        questionText.innerText = `${item.originalIndex + 1}. ${item.question}`;
        questionBlock.appendChild(questionText);

        // --- BẮT ĐẦU PHẦN XỬ LÝ ẢNH (MỚI THÊM) ---
        // Kiểm tra xem câu hỏi có thuộc tính image không
        if (item.image) {
            const imgElement = document.createElement('img');
            imgElement.src = item.image;
            imgElement.className = 'question-image'; // Class để bạn style thêm trong CSS nếu muốn
            
            // Style cơ bản để ảnh hiển thị gọn gàng
            imgElement.style.maxWidth = '100%';
            imgElement.style.display = 'block';
            imgElement.style.marginTop = '10px';
            imgElement.style.marginBottom = '10px';
            imgElement.style.borderRadius = '5px';

            // Xử lý lỗi: Nếu đường dẫn ảnh sai, ẩn ảnh đi để không hiện icon lỗi
            imgElement.onerror = function() {
                this.style.display = 'none';
            };

            questionBlock.appendChild(imgElement);
        }
        // --- KẾT THÚC PHẦN XỬ LÝ ẢNH ---

        // 2. Hiển thị các lựa chọn
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