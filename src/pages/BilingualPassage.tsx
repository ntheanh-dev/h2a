import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Paper, TextField, Button, Tooltip } from '@mui/material';
import { FaPen, FaClock, FaMicrophone, FaLightbulb, FaCheck, FaComment, FaThumbsUp } from 'react-icons/fa';

const BilingualPassage = () => {
  const [timeLeft, setTimeLeft] = useState(58); // 58 seconds
  const [translation, setTranslation] = useState('');
  const [selectedSentenceIndex, setSelectedSentenceIndex] = useState<number | null>(null);
  const [showTranslation, setShowTranslation] = useState<number | null>(null);
  // Mock API response data - in real app this would come from API call
  const sentences = [
    "Một trong những khía cạnh quan trọng của cuộc sống đại học không chỉ nằm ở việc tiếp thu kiến thức chuyên môn, mà còn ở việc phát triển các kỹ năng mềm thông qua các hoạt động và dự án thực tế.",
    "Thực tế, việc tham gia vào các câu lạc bộ học thuật, tổ chức sinh viên hoặc các dự án nghiên cứu mang đến cơ hội tuyệt vời để sinh viên rèn luyện kỹ năng làm việc nhóm, giao tiếp hiệu quả và giải quyết vấn đề một cách sáng tạo.",
    "Ví dụ, một sinh viên tham gia vào câu lạc bộ tranh biện không chỉ cải thiện khả năng hùng biện và tư duy phản biện, mà còn học được cách lắng nghe và tôn trọng ý kiến của người khác.",
    "Hơn nữa, việc quản lý một dự án nghiên cứu khoa học đòi hỏi sinh viên phải có khả năng lập kế hoạch, phân tích dữ liệu và trình bày kết quả một cách logic và thuyết phục, những kỹ năng này vô cùng giá trị cho sự nghiệp sau này.",
    "Điều này đặc biệt quan trọng trong bối cảnh thị trường lao động ngày càng cạnh tranh, nơi nhà tuyển dụng không chỉ tìm kiếm ứng viên có kiến thức chuyên môn vững chắc, mà còn có khả năng thích ứng và đóng góp vào sự phát triển của tổ chức.",
    "Bên cạnh đó, việc tham gia vào các hoạt động ngoại khóa cũng giúp sinh viên mở rộng mạng lưới quan hệ, kết nối với những người có cùng sở thích và đam mê, từ đó tạo ra những cơ hội hợp tác và phát triển trong tương lai.",
    "Chẳng hạn, việc tham gia vào một tổ chức sinh viên tình nguyện có thể giúp sinh viên gặp gỡ những người có cùng mục tiêu phục vụ cộng đồng, từ đó xây dựng những mối quan hệ có ý nghĩa và phát triển kỹ năng lãnh đạo."
  ];

  // Mock English translations for demonstration
  const englishTranslations = [
    // "One of the important aspects of university life lies not only in acquiring specialized knowledge, but also in developing soft skills through practical activities and projects.",
    // "In fact, participating in academic clubs, student organizations, or research projects provides excellent opportunities for students to practice teamwork, effective communication, and creative problem-solving skills.",
    // "For example, a student participating in a debate club not only improves their oratory and critical thinking abilities, but also learns how to listen and respect others' opinions.",
    // "Furthermore, managing a scientific research project requires students to have the ability to plan, analyze data, and present results logically and persuasively, skills that are extremely valuable for their future careers.",
    // "This is particularly important in the increasingly competitive job market, where employers seek not only candidates with solid professional knowledge, but also the ability to adapt and contribute to the organization's development.",
    // "Additionally, participating in extracurricular activities helps students expand their network, connect with people who share similar interests and passions, thereby creating opportunities for collaboration and development in the future.",
    // "For instance, participating in a student volunteer organization can help students meet people with similar community service goals, thereby building meaningful relationships and developing leadership skills."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSentenceClick = (index: number) => {
    setSelectedSentenceIndex(index);
    setShowTranslation(showTranslation === index ? null : index);
  };

  const handleSentenceHover = (index: number) => {
    setSelectedSentenceIndex(index);
    setShowTranslation(index);
  };

  const handleSentenceLeave = () => {
    setSelectedSentenceIndex(null);
    setShowTranslation(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6 h-[calc(100vh-3rem)]">
          {/* Main Content Area */}
          <div className="flex-1 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 flex-shrink-0">
              <Typography variant="h6" className="font-bold text-gray-800 text-lg">
                Đoạn văn song ngữ
              </Typography>
              <div className="flex items-center gap-2 bg-orange-50 px-3 py-1 rounded-full">
                <FaClock className="text-orange-500 text-sm" />
                <span className="font-mono text-lg font-bold text-orange-600">{formatTime(timeLeft)}</span>
              </div>
              <Typography variant="body1" className="text-gray-600 font-medium">
                Câu 1/12
              </Typography>
            </div>

            {/* Vietnamese Text */}
            <div className="p-6 flex-1 overflow-hidden">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 shadow-sm h-full overflow-y-auto relative">
                <div className="leading-7 text-base text-gray-800">
                  {sentences.map((sentence, index) => (
                    <React.Fragment key={index}>
                      {index <= englishTranslations.length - 1 ? (
                        <span key={index} className="relative inline">
                          <span
                            className={`cursor-pointer border-l-4 transition-all duration-100 rounded px-1 py-0.5 font-medium ${showTranslation === index ? 'border-l-green-500 bg-green-100 text-green-800' : 'border-l-blue-500 bg-blue-100 text-blue-800 '}}
                        `}
                            onMouseEnter={() => handleSentenceHover(index)}
                            onMouseLeave={handleSentenceLeave}
                          >
                            {showTranslation === index ? sentence : englishTranslations[index]}
                          </span>
                          {index < sentences.length - 1 && ' '}
                        </span>
                      ) : (
                        (englishTranslations.length === index ? (
                          <span key={index} className="relative inline">
                            <span
                              className={`rounded border-l-red-500 border-l-4 px-1 py-0.5 bg-red-100 text-red-800 font-medium}
                        `}
                            >
                              {sentence}
                            </span>
                            {index < sentences.length - 1 && ' '}
                          </span>
                        ) : (
                          <span key={index} className="relative inline">
                            <span
                            >
                              {sentence}
                            </span>
                            {index < sentences.length - 1 && ' '}
                          </span>
                        ))
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Translation Input */}
            <div className="px-6 mb-6">
              <div className="relative">
                <TextField
                  fullWidth
                  multiline
                  rows={2}
                  maxRows={4}
                  variant="outlined"
                  placeholder="Nhập bản dịch của bạn..."
                  value={translation}
                  onChange={(e) => setTranslation(e.target.value)}
                  className="bg-white"
                  InputProps={{
                    style: {
                      borderRadius: 16,
                      borderColor: '#E5E7EB',
                      fontSize: '16px',
                      lineHeight: '1.6',
                      padding: '16px',
                      paddingRight: '48px',
                      overflow: 'auto',
                      wordBreak: 'break-word',
                      whiteSpace: 'pre-line',
                    }
                  }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="px-6 pb-6">
              <div className="flex gap-4 justify-center">
                <Button
                  variant="contained"
                  className="w-48 py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-base"
                  startIcon={<div className="w-2 h-2 bg-white rounded-full" />}
                >
                  Xem gợi ý
                </Button>
                <Button
                  variant="contained"
                  className="w-48 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-base"
                  startIcon={<FaCheck className="text-white" />}
                >
                  Kiểm tra
                </Button>
              </div>
            </div>
          </div>

          {/* AI Assistant Sidebar */}
          <div className="w-96 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
              <Typography variant="h6" className="font-bold text-gray-800 text-lg">
                Trợ lý học tập AI của bạn
              </Typography>
              <Button
                variant="outlined"
                size="small"
                className="text-gray-600 border-gray-300 hover:border-gray-400 hover:bg-gray-50 px-3 py-1 rounded-lg text-sm font-medium"
                startIcon={<FaComment className="text-sm" />}
              >
                Góp ý
              </Button>
            </div>

            {/* Instructions */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <FaThumbsUp className="text-green-500 text-xl" />
                <Typography variant="h6" className="font-bold text-gray-800 text-lg">
                  Hướng dẫn luyện tập
                </Typography>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200 shadow-sm">
                  <FaLightbulb className="text-blue-500 mt-1 flex-shrink-0 text-lg" />
                  <Typography variant="body2" className="text-gray-700 leading-6">
                    Hover chuột vào bất kỳ câu nào để xem bản dịch tiếng Anh
                  </Typography>
                </div>

                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-200 shadow-sm">
                  <FaCheck className="text-green-500 mt-1 flex-shrink-0 text-lg" />
                  <Typography variant="body2" className="text-gray-700 leading-6">
                    Hãy click vào button "Kiểm tra" để AI review và đánh giá câu dịch của bạn
                  </Typography>
                </div>

                <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl border border-purple-200 shadow-sm">
                  <FaPen className="text-purple-500 mt-1 flex-shrink-0 text-lg" />
                  <Typography variant="body2" className="text-gray-700 leading-6">
                    Bản dịch sẽ xuất hiện ở trên câu khi bạn hover chuột
                  </Typography>
                </div>
              </div>
            </div>

            {/* Motivational Message */}
            <div className="p-6 mt-auto">
              <div className="bg-green-100 rounded-xl p-4 border border-green-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <FaComment className="text-green-500 mt-1 flex-shrink-0 text-lg" />
                  <Typography variant="body2" className="text-gray-700 italic leading-6 font-medium">
                    "Hãy nhớ lý do tại sao bạn bắt đầu, và tiếp tục bước tới."
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BilingualPassage; 