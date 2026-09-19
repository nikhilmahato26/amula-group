import { COMPANY_INFO } from "../data/navigation";

export type EnquiryType = "general" | "job" | "car" | "travel";

export const getWhatsAppLink = (
  type: EnquiryType = "general",
  customText?: string
): string => {
  const phone = `91${COMPANY_INFO.primaryPhone}`;

  if (customText) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(customText)}`;
  }

  let message = "Hello AMULA GROUP, I would like to enquire about your services.";

  switch (type) {
    case "job":
      message = "Hello AMULA GROUP, I am interested in job consultancy services. Please share the available opportunities.";
      break;
    case "car":
      message = "Hello AMULA GROUP, I would like to enquire about car rental. Please share the available vehicles and details.";
      break;
    case "travel":
      message = "Hello AMULA GROUP, I would like to enquire about travel services.";
      break;
    case "general":
    default:
      message = "Hello AMULA GROUP, I would like to enquire about your services.";
      break;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export interface JobEnquiryPayload {
  fullName: string;
  phone: string;
  email?: string;
  preferredRole: string;
  preferredLocation: string;
  experience: string;
  qualification: string;
  message?: string;
  resumeFileName?: string;
}

export const formatJobEnquiryWhatsApp = (payload: JobEnquiryPayload): string => {
  const text = `*New Job Consultancy Enquiry — AMULA GROUP*
---------------------------------------
👤 *Name:* ${payload.fullName}
📞 *Phone:* ${payload.phone}
📧 *Email:* ${payload.email || "Not specified"}
💼 *Preferred Role:* ${payload.preferredRole}
📍 *Preferred Location:* ${payload.preferredLocation}
⏳ *Experience:* ${payload.experience}
🎓 *Qualification:* ${payload.qualification}
${payload.resumeFileName ? `📄 *Resume:* Attached (${payload.resumeFileName})` : ""}
${payload.message ? `📝 *Message:* ${payload.message}` : ""}
---------------------------------------
_Sent via AMULA GROUP Website_`;

  return getWhatsAppLink("job", text);
};

export interface CarBookingPayload {
  name: string;
  phone: string;
  email?: string;
  vehicle: string;
  pickupLocation: string;
  dropLocation: string;
  travelDate: string;
  passengers?: string;
  tripType: string;
  message?: string;
}

export const formatCarBookingWhatsApp = (payload: CarBookingPayload): string => {
  const text = `*New Car Rental Booking Enquiry — AMULA GROUP*
---------------------------------------
👤 *Name:* ${payload.name}
📞 *Phone:* ${payload.phone}
📧 *Email:* ${payload.email || "Not specified"}
🚗 *Vehicle:* ${payload.vehicle}
🚀 *Trip Type:* ${payload.tripType}
📍 *Pickup:* ${payload.pickupLocation}
🏁 *Drop:* ${payload.dropLocation}
📅 *Date:* ${payload.travelDate}
👥 *Passengers:* ${payload.passengers || "1"}
${payload.message ? `📝 *Notes:* ${payload.message}` : ""}
---------------------------------------
_Sent via AMULA GROUP Car Rental_`;

  return getWhatsAppLink("car", text);
};
