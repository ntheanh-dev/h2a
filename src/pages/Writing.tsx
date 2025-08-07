import {
  Box,
  Typography,
  Button,
  Container,
  TextField,
  MenuItem,
  ListSubheader,
} from "@mui/material";
import { CheckCircle, Edit, Flag, Layers } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const COLOR_BLACK = "#000000";
const COLOR_NAVY = "#131f38";
const COLOR_ORANGE = "#ffaa13";
const COLOR_GRAY = "#e7e7e7";
const COLOR_WHITE = "#ffffff";

const TOPIC_OPTIONS = [
  {
    group: "Giao tiếp hằng ngày",
    options: [
      "Hội thoại hằng ngày",
      "Chào hỏi và xã giao",
      "Mua sắm",
      "Nhà hàng và đặt món",
      "Di chuyển và giao thông",
      "Hỏi đường",
      "Trò chuyện về thời tiết",
    ],
  },
  {
    group: "Công việc",
    options: [
      "Phỏng vấn việc làm",
      "Giao tiếp văn phòng",
      "Báo cáo và thuyết trình",
      "Gửi email",
    ],
  },
];

const LEVEL_OPTIONS = [
  { value: "easy", label: "Dễ", icon: "🌱", level: "A1" },
  { value: "fair", label: "Khá dễ", icon: "🌿", level: "A2" },
  { value: "medium", label: "Trung bình", icon: "🧠", level: "B1" },
  { value: "hard", label: "Khó", icon: "🎯", level: "B2" },
  { value: "very_hard", label: "Rất khó", icon: "🏆", level: "C1" },
];

const Writing = () => {

  const navigate = useNavigate();

  const [selectedMethod, setSelectedMethod] = useState<"topic" | "custom">(
    "topic"
  );
  const [selectedLevel, setSelectedLevel] = useState<string>("fair");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [customTopic, setCustomTopic] = useState("");
  const [customParagraph, setCustomParagraph] = useState("");

  // Đếm số từ
  const wordCount = customParagraph.trim()
    ? customParagraph.trim().split(/\s+/).length
    : 0;

  return (
    <Container className="py-6">
      {/* Tiêu đề lớn */}
      <Typography
        variant="h4"
        className="font-bold text-center"
        style={{ color: COLOR_NAVY, marginBottom: 32 }}
      >
        ✨ Tạo bài luyện viết mới
      </Typography>

      {/* Box chọn cách tạo bài */}
      <Box className="flex flex-col md:flex-row gap-4 mb-6">
        <Box
          className="flex-1 rounded-2xl p-6 shadow-sm flex flex-col gap-3 border"
          style={{
            background: `linear-gradient(135deg, ${COLOR_NAVY} 0%, ${COLOR_ORANGE} 100%)`,
            borderColor: COLOR_GRAY,
          }}
        >
          <Typography
            variant="subtitle1"
            className="font-bold flex items-center gap-2"
            style={{ color: COLOR_WHITE }}
          >
            <Layers
              fontSize="medium"
              style={{
                color: COLOR_ORANGE,
                background: COLOR_WHITE,
                borderRadius: 8,
                padding: 2,
              }}
            />{" "}
            Tạo bài từ chủ đề
          </Typography>
          <Typography
            variant="body2"
            className="mb-2"
            style={{ color: COLOR_WHITE, opacity: 0.9 }}
          >
            AI tạo nội dung dựa trên chủ đề bạn chọn
          </Typography>
          <Button
            variant={selectedMethod === "topic" ? "contained" : "outlined"}
            style={
              selectedMethod === "topic"
                ? {
                    background: COLOR_WHITE,
                    color: COLOR_NAVY,
                    borderRadius: 8,
                    paddingLeft: 24,
                    paddingRight: 24,
                    boxShadow: "none",
                    fontWeight: 700,
                  }
                : {
                    color: COLOR_WHITE,
                    borderColor: COLOR_WHITE,
                    borderRadius: 8,
                    paddingLeft: 24,
                    paddingRight: 24,
                    background: "transparent",
                    boxShadow: "none",
                    fontWeight: 700,
                  }
            }
            onClick={() => setSelectedMethod("topic")}
            startIcon={
              selectedMethod === "topic" ? (
                <CheckCircle style={{ color: COLOR_ORANGE }} />
              ) : null
            }
          >
            {selectedMethod === "topic" ? "Đã chọn" : "Chọn"}
          </Button>
        </Box>
        <Box
          className="flex-1 rounded-2xl p-6 shadow-sm flex flex-col gap-3 border"
          style={{
            background: `linear-gradient(135deg, ${COLOR_ORANGE} 0%, ${COLOR_NAVY} 100%)`,
            borderColor: COLOR_GRAY,
          }}
        >
          <Typography
            variant="subtitle1"
            className="font-bold flex items-center gap-2"
            style={{ color: COLOR_WHITE }}
          >
            <Edit
              fontSize="medium"
              style={{
                color: COLOR_NAVY,
                background: COLOR_WHITE,
                borderRadius: 8,
                padding: 2,
              }}
            />{" "}
            Nhập đoạn văn của bạn
          </Typography>
          <Typography
            variant="body2"
            className="mb-2"
            style={{ color: COLOR_WHITE, opacity: 0.9 }}
          >
            Sử dụng đoạn văn tiếng Việt do bạn cung cấp
          </Typography>
          <Button
            variant={selectedMethod === "custom" ? "contained" : "outlined"}
            style={
              selectedMethod === "custom"
                ? {
                    background: COLOR_WHITE,
                    color: COLOR_NAVY,
                    borderRadius: 8,
                    paddingLeft: 24,
                    paddingRight: 24,
                    boxShadow: "none",
                    fontWeight: 700,
                  }
                : {
                    color: COLOR_WHITE,
                    borderColor: COLOR_WHITE,
                    borderRadius: 8,
                    paddingLeft: 24,
                    paddingRight: 24,
                    background: "transparent",
                    boxShadow: "none",
                    fontWeight: 700,
                  }
            }
            onClick={() => setSelectedMethod("custom")}
            startIcon={
              selectedMethod === "custom" ? (
                <CheckCircle style={{ color: COLOR_ORANGE }} />
              ) : null
            }
          >
            {selectedMethod === "custom" ? "Đã chọn" : "Chọn"}
          </Button>
        </Box>
      </Box>

      {/* Nội dung phía dưới thay đổi theo selectedMethod */}
      {selectedMethod === "custom" ? (
        <Box
          className="rounded-2xl border"
          style={{
            background: "#f6fef9",
            borderColor: "#22c55e",
            marginBottom: 32,
          }}
        >
          <Box className="p-6 pb-3">
            <Typography
              variant="h6"
              className="font-bold flex items-center gap-2 mb-2"
              style={{ color: "#22c55e" }}
            >
              <Edit fontSize="medium" style={{ color: "#22c55e" }} /> Nhập đoạn
              văn tiếng Việt
            </Typography>
            <Typography
              variant="subtitle2"
              className="mb-2"
              style={{ color: "#22c55e", fontWeight: 600 }}
            >
              Hãy nhập một đoạn văn tiếng Việt mà bạn muốn luyện dịch. Đoạn văn
              càng rõ ràng, mạch lạc thì AI sẽ hỗ trợ bạn càng hiệu quả.
            </Typography>
            <Box
              className="rounded-xl border p-4 mb-2"
              style={{ background: "#fafffc", borderColor: "#22c55e" }}
            >
              <TextField
                multiline
                minRows={5}
                maxRows={12}
                fullWidth
                placeholder={
                  "Nhập đoạn văn tiếng Việt bạn muốn luyện dịch...\n\nVí dụ: Mỗi buổi sáng, tôi thường đi bộ quanh công viên gần nhà để hít thở không khí trong lành. Những hàng cây xanh mát và tiếng chim hót giúp tôi cảm thấy tràn đầy năng lượng cho một ngày mới."
                }
                value={customParagraph}
                onChange={(e) => setCustomParagraph(e.target.value)}
                InputProps={{
                  style: {
                    background: "#fafffc",
                    borderRadius: 8,
                    color: "#444",
                    fontSize: 16,
                  },
                  disableUnderline: true,
                }}
              />
            </Box>
            <Box className="flex justify-between items-center mb-2">
              <Typography
                variant="caption"
                style={{ color: "#22c55e", fontWeight: 600 }}
              >
                {wordCount}/700 từ
              </Typography>
            </Box>
            <Box
              className="rounded-xl p-4"
              style={{ background: "#e9fbe9", border: "1px solid #b6e7b6" }}
            >
              <ul className="space-y-1 text-sm">
                <li
                  className="flex items-center gap-2"
                  style={{ color: "#22c55e" }}
                >
                  <span>✔️</span> Gợi ý: Độ dài lý tưởng từ 150 đến 700 từ
                  (khoảng 5-15 câu).
                </li>
                <li
                  className="flex items-center gap-2"
                  style={{ color: "#22c55e" }}
                >
                  <span>🪄</span> AI sẽ tự động phân tách đoạn văn thành các câu
                  riêng biệt để luyện dịch.
                </li>
                <li
                  className="flex items-center gap-2"
                  style={{ color: "#f59e42" }}
                >
                  <span>⚠️</span> Hãy đảm bảo nội dung phù hợp với chủ đề và
                  ngôn ngữ đích bạn đã chọn.
                </li>
              </ul>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Chủ đề luyện tập */}
          <Box
            className="flex-1 rounded-2xl p-6 shadow-sm flex flex-col gap-3 border"
            style={{ background: COLOR_GRAY, borderColor: COLOR_GRAY }}
          >
            <Typography
              variant="subtitle1"
              className="font-bold flex items-center gap-2"
              style={{ color: COLOR_NAVY }}
            >
              <Layers fontSize="small" style={{ color: COLOR_ORANGE }} /> Chủ đề
              luyện tập
            </Typography>
            <TextField
              select
              SelectProps={{ displayEmpty: true }}
              placeholder="-- Chọn chủ đề --"
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="bg-white rounded-lg"
              InputProps={{
                style: {
                  background: COLOR_WHITE,
                  borderRadius: 8,
                  color: COLOR_BLACK,
                },
              }}
              fullWidth
            >
              <MenuItem value="">-- Chọn chủ đề --</MenuItem>
              {TOPIC_OPTIONS.map((group) => [
                <ListSubheader key={group.group}>{group.group}</ListSubheader>,
                group.options.map((opt) => (
                  <MenuItem key={opt} value={opt}>
                    {opt}
                  </MenuItem>
                )),
              ])}
            </TextField>
            <Typography variant="body2" style={{ color: COLOR_NAVY }}>
              Hoặc nhập chủ đề tự chọn:
            </Typography>
            <TextField
              placeholder="Nhập chủ đề bạn muốn luyện tập..."
              value={customTopic}
              onChange={(e) => setCustomTopic(e.target.value)}
              className="bg-white rounded-lg"
              InputProps={{
                style: {
                  background: COLOR_WHITE,
                  borderRadius: 8,
                  color: COLOR_BLACK,
                },
              }}
              fullWidth
            />
          </Box>
          {/* Mức độ khó */}
          <Box
            className="flex-1 rounded-2xl p-6 shadow-sm flex flex-col gap-3 border"
            style={{ background: COLOR_GRAY, borderColor: COLOR_GRAY }}
          >
            <Typography
              variant="subtitle1"
              className="font-bold flex items-center gap-2"
              style={{ color: COLOR_NAVY }}
            >
              <Flag fontSize="small" style={{ color: COLOR_ORANGE }} /> Mức độ
              khó
            </Typography>
            <TextField
              select
              SelectProps={{ displayEmpty: true }}
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-white rounded-lg"
              InputProps={{
                style: {
                  background: COLOR_WHITE,
                  borderRadius: 8,
                  color: COLOR_BLACK,
                },
              }}
              fullWidth
            >
              {LEVEL_OPTIONS.map((opt) => (
                <MenuItem key={opt.value} value={opt.value}>
                  <span style={{ marginRight: 8 }}>{opt.icon}</span>
                  <span>{opt.label}</span>
                  <span style={{ marginLeft: 12, color: "#888", fontSize: 13 }}>
                    ({opt.level})
                  </span>
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </Box>
      )}

      {/* Nút bắt đầu luyện viết */}
      <Box className="flex justify-center">
        <Button
          variant="contained"
          style={{
            background: `linear-gradient(90deg, ${COLOR_ORANGE} 0%, ${COLOR_NAVY} 100%)`,
            color: COLOR_WHITE,
            borderRadius: 8,
            paddingLeft: 40,
            paddingRight: 40,
            fontWeight: 700,
            fontSize: 18,
            boxShadow: "none",
          }}
          onClick={() => navigate("/sentence-writing")}
        >
          Bắt đầu luyện viết
        </Button>
      </Box>
    </Container>
  );
};

export default Writing;
