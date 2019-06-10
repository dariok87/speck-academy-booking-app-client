import styled from 'styled-components';

const HallReqContainer = styled.header`
  margin: 0 auto;
  width: 500px;
  border: 1px solid black;
  padding: 10px;
`;

const HallReqTitle = styled.h2`
  color: blue;
`;

const HallDiv = styled.div`
  margin: auto;
  width: 1024px;
  height: 352px;
  border-radius: 4px;
  border: solid 1px #d9d9d9;
  background-color: #ffffff;
  display: flex;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  height: 352px;
  width: 268px;
  display: flex;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  height: 352px;
  width: 504px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  box-sizing: border-box;
`;

const ButtonContainer = styled.div`
  height: 352px;
  width: 260px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  box-sizing: border-box;
`;

const ImageHall = styled.img`
  width: 228px;
  height: 136px;
  border-radius: 2px;
  border: solid 1px #229c7f;
  margin-top: 16px;
  margin-left: 16px;
  object-fit: cover;
`;
const HeaderHall = styled.h1`
  width: 278px;
  font-family: Lora;
  font-size: 20px;
  color: #000000;
  margin-top: 18px;
`;

const AdressHall = styled.p`
  width: 117px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  color: #000000;
  margin-top: 25px;
  margin-left: 24px;
`;

const EventItem = styled.p`
  width: 504px;
  border-radius: 2px;
  background-color: #229c7f;
  margin-top: 16px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
  margin-top: 16px;
  padding: 2px 8px;
`;

const EventName = styled.h3`
  width: 508px;
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  color: #000000;
  margin-top: 12px;
`;

const EventDescription = styled.p`
  width: 504px;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  color: #000000;
  margin-top: 8px;
  text-align: justify;
`;

const LeftContainer = styled.div`
  width: 252px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  margin-top: 24px;
`;

const RightContainer = styled.div`
  width: 252px;
  box-sizing: border-box;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin-top: 24px;
`;

const DateBanner = styled.div`
  width: 244px;
  height: 20px;
  border-radius: 2px;
  background-color: #229c7f;
  padding: 2px 8px;
  box-sizing: border-box;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
`;

const DateLabel = styled.p`
  width: 40px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: #000000;
  margin-top: 12px;
  padding-left: 5px;
`;

const DateSet = styled.p`
  width: 152px;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  color: #000000;
  margin-top: 15px;
  margin-left: 16px;
`;

const TimeLabel = styled.p`
  width: 45px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: #000000;
  margin-top: 8px;
`;

const TimeSet = styled.p`
  width: 145px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  color: #000000;
  margin-top: 11px;
  margin-left: 12px;
`;

const ContactLabel = styled.div`
  width: 244px;
  height: 20px;
  border-radius: 2px;
  background-color: #229c7f;
  padding: 2px 8px;
  box-sizing: border-box;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  color: #ffffff;
`;

const NameSurnameLabel = styled.p`
  width: 82px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: #000000;
  margin-top: 12px;
  white-space: nowrap;
  margin-left: 10px;
  text-align: right;
`;

const NameSurnameSet = styled.p`
  width: 135px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  color: #000000;
  margin-top: 15px;
  margin-left: 19px;
  white-space: nowrap;
`;

const OrganisationLabel = styled.p`
  width: 83px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: #000000;
  margin-top: 8px;
  margin-left: 6px;
  white-space: nowrap;
  text-align: left;
`;

const OrganisationSet = styled.p`
  width: 135px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  color: #000000;
  margin-top: 10px;
  margin-left: 21px;
  white-space: nowrap;
  text-align: left;
`;

const EmailLabel = styled.p`
  width: 83px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: #000000;
  margin-top: 8px;
  margin-left: 10px;
  white-space: nowrap;
  text-align: right;
`;

const EmailSet = styled.p`
  width: 135px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  color: #000000;
  margin-top: 11px;
  margin-left: 18px;
  white-space: nowrap;
  text-align: left;
`;

const PhoneLabel = styled.p`
  width: 83px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 200;
  color: #000000;
  margin-top: 8px;
  margin-left: 10px;
  white-space: nowrap;
  text-align: right;
`;

const PhoneSet = styled.p`
  width: 135px;
  height: 16px;
  font-family: Poppins;
  font-size: 12px;
  line-height: 1.05;
  color: #000000;
  margin-top: 11px;
  margin-left: 18px;
  white-space: nowrap;
  text-align: left;
`;

const ButtonUp = styled.div`
  height: 176px;
  width: 260px;
`;

const ButtonDown = styled.div`
  height: 176px;
  width: 260px;
`;

const Submit = styled.p`
  width: 74px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  color: #000000;
  margin-top: 16px;
  margin-left: 170px;
  margin-right: 16px;
`;

const SubmitDate = styled.p`
  width: 114px;
  height: 16px;
  opacity: 0.5;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 600;
  color: #229c7f;
  margin-top: 8px;
  margin-left: 149px;
  margin-right: 16px;
`;

const ButtonAccept = styled.button`
  width: 228px;
  height: 40px;
  border-radius: 4px;
  background-color: #0f4951;
  font-weight: 500;
  color: #ffffff;
  margin-top: 75px;
  margin-left: 16px;
  padding: 9px 12px 12px 7px;
  text-align: center;
`;

const ButtonDenied = styled.button`
  width: 228px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #0f4951;
  background-color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  color: #0f4951;
  margin-left: 16px;
  margin-top: 12px;
  padding: 9px 12px 12px 7px;
  text-align: center;
`;

export {
  HallReqContainer,
  HallReqTitle,
  HallDiv,
  ImageContainer,
  TextContainer,
  ButtonContainer,
  ImageHall,
  HeaderHall,
  AdressHall,
  EventItem,
  EventName,
  EventDescription,
  LeftContainer,
  RightContainer,
  DateBanner,
  DateLabel,
  DateSet,
  TimeLabel,
  TimeSet,
  ContactLabel,
  NameSurnameLabel,
  NameSurnameSet,
  OrganisationLabel,
  OrganisationSet,
  EmailLabel,
  EmailSet,
  PhoneLabel,
  PhoneSet,
  ButtonUp,
  ButtonDown,
  Submit,
  SubmitDate,
  ButtonAccept,
  ButtonDenied
};
