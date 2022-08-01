import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;
  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "livingroom":
      data = {
        alt: 'livingroom',
        src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
      };
      break;
    case "bathroom":
      data = {
        alt: 'bathroom',
        src: 'https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg'
      };
      break;
    case "kitchen":
      data = {
        alt: 'kitchen',
        src: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg'
      };
      break;
    case "diningroom":
      data = {
        alt: 'diningroom',
        src: 'https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg'
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="img"  >
        <img src={data.src} alt={data.alt} style={{ height: "100%", borderRadius: "1%" }}></img>
      </div>

    </div>
  );
};

export default Widget;
