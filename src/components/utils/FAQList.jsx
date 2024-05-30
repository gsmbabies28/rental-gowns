import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

const list = [
  {
    title: "HOW DOES VESTIDO RENTAL WORK?",
    answers: [
      `Browse through our wide selection of pieces curated by professional stylists.
            After making your selection, you may book the piece directly online by indicating your preferred date of delivery and return (please note that we recommend having the rental sent over 1-2 days before your event date). We will then deliver it to your chosen location. Each item comes in a ready to wear pressed and cleaned condition.
            Once you’re done, kindly place the rental back in the bag it came in and book a return with a courier service. Our team will be on standby to help with logistics and coordination.`,
    ],
  },
  {
    title: "How about delivery and return?",
    answers: [
      `Shipping is a flat rate of P180 for both delivery and return within Metro Manila. Tell us where we can send the rental by filling in your shipping address upon checkout. Details will be confirmed via email once the order is made. If you suddenly require a change in address for delivery do inform us at least 24 hours in advance.`,
      `Please ensure that there is a point person who can receive your delivery during the specified date and time (which we will coordinate with you).Our team will be on standby to assist you by providing details and specifics for the courier service. Please don’t hesitate to reach out to us at +639171682621 for questions or guidance.`,
    ],
  },
  {
    title: "What if I damage the item?",
    answers: [
      `Vestido covers minor wear and tear. Each rental piece is inspected thoroughly to ensure that it arrives in good condition and is inspected again upon return.`,
      `In the event that the rental is damaged or badly stained, we will assess the damage and inform you of the additional charges needed to repair it.`,
      `Present value, which has been agreed upon by Vestido and our Consignors, will be charged for irreparable damage.`,
      `If you notice any damage or stain upon receiving the rental, do inform us within 12 hours of delivery.`,
    ],
  },
  {
    title: "What if I lose the dress?",
    answers: [
      `Once the rental is delivered, it is in your care and responsibility. We will have to charge the present value if it is lost during this period. If the dress arrives with pre-existing damage without prior notice from our team, please contact us at hello@vestidomanila.com within 12 hours of receiving it. We’ll arrange for its return. Damages that are not reported but worn will count as a regular rental.`,
      `Always return the rental if it is not lost, regardless of the condition it is in. This way, we will be able to determine if it can be repaired at a lower cost versus the full present value. Please note that you are liable for the repair charges.`,
    ],
  },
  {
    title: "Who does the laundry?",
    answers: [
      `We handle dry cleaning and laundry for all our garments. All you need to do is to re-pack the rental in the bag it arrived in. Please do not attempt to wash the garment on your own as it may damage the piece. Every garment is professionally dry cleaned and maintained by Vestido. Moreover, rigorous cleaning process and quarantine measures are in place at the showroom where all our pieces are safely stored. `,
      `We also take care of steaming and pressing our garments before we deliver them to you.
            Although we do our best to ensure that they will arrive wrinkle-free, we cannot guarantee this, as there will be some movement during transportation. If the piece arrives slightly creased, you may use a steamer in low heat to press the dress.`,
      `Ironing our garments is not allowed. Many of the pieces are made with delicate material that will not withstand the heat of an iron.`,
    ],
  },
  {
    title: "How long can I keep the dress?",
    answers: [
      `You can rent a piece for a duration of 4 days but it can also be extended upon request. Rental period starts the day you receive the piece. It will be delivered before 9pm on the first day of your rental period.`,
      `Rentals follow a 4-day duration unless requested otherwise. A late-return fee of P1,000 a day will be charged unless we are informed 24 hours before your rental period expires. For last minute events or extension requests, drop us an email at hello@vestidomanila.com or message us at +639171682621, and we may be able to work out a solution for you.`,
    ],
  },
  {
    title: "What if I'm late returning the dress?",
    answers: [
      `We take pride in providing an exceptional experience that begins with on-time delivery. If you return your rental late without prior notice, a fee of P1,000 will be charged each day it goes beyond the rental period. If it is not returned within 7 days, we will consider the dress as lost and we will charge you the full present value.`,
      `Our rentals are unique and we cannot purchase additional pieces to fulfill orders. So please note that we will charge full rental price for late returns that overlap with existing bookings.`,
      `We send our customers a friendly reminder through email or SMS about the return date to ensure they don’t miss it.`,
    ],
  },
  {
    title: "Reservation",
    answers: [
      `We accept bookings up to 6 months in advance and recommend reserving your piece as soon as possible to ensure availability. Please set your delivery date 1 – 2 days before the event to avoid any last-minute panics and to make sure everything arrives on time. We also offer same-day delivery at an additional P500. We will be sending you a confirmation email once the rental is reserved.`,
    ],
  },
  {
    title: "Size and Fit",
    answers: [
      `A comprehensive size and measurement guide is available for each shoe or garment to help you find the right fit. Although it is still your responsibility to ensure that the piece you have rented is the right size. You may also contact us for assistance via email at hello@vestidomanila.com. Please note that sizes vary per designer so your proper size may not be the one you’re used to wearing.`,
      `To determine your size for a particular garment we recommend taking your bust, waist and hip measurements to compare them with the ones found on the size chart. Please choose a rental that will comfortably fit all of your measurements.`,
      `Bust measurement – Standing up straight, with your arms at your side, measure the fullest part of your chest and around your back.`,
      `Waist measurement – Measure the narrowest part of your torso or where your waist creases when you bend to the side.`,
      `Hip measurement – Standing up straight, measure around the fullest part of your hips.`,
    ],
  },
  {
    title: "What if the dress doesn't fit?",
    answers: [
      `If the rental does not fit as expected, please call us within 24 hours of receipt immediately and make arrangements to exchange/refund the rental. We can also make suggestions to find you a better fitting piece that we can send over right away to make it in time for your event. If you decide not to get an alternate dress, we shall issue you store credits equivalent to the rental price.`,
    ],
  },
  {
    title: "Charges, Cancellations, and Refunds",
    answers: [
      `You may change your rental dates before the beginning of your rental period by contacting us at hello@vestidomanila.com. If the piece has already left the studio, changes or cancellations on your rental will not be allowed. Refunds are given in the form of credits for your future use with us.`,
      `Once your dress rental has been confirmed, any changes to your order will be subject to an exchange fee of P1000.`,
      `Kindly note that the full amount of credits will only be refunded if the cancellation is made 72 hours before the stipulated rental period. If it is made 48 hours prior to delivery date, we will refund 50% of the fee and 20% if it is done within 24 hours.`,
    ],
  },
  {
    title: "PAYMENT",
    answers: [
      `We accept payment through PayPal, which is one of the most trusted and used by e-commerce websites all over the world to make sure your credit card information is completely secure.`,
      `We will charge your credit card the full rental fee as soon as we have received the order and have confirmed the availability of your requested rental. Late fees, damages, loss and unreturned bags will be charged to your card accordingly using the pre-authorized amount issued on your credit card upon checkout. You will receive a notification for the additional charge via SMS or email.`,
    ],
  },
  {
    title: "PURCHASE OF RENTALS",
    answers: [
      `We currently offer our pieces out for rental only but we do hold sales annually. Follow us on Instagram and Facebook to receive updates and news about our sales.`,
    ],
  },
  {
    title: "ALTERATIONS",
    answers: [
      `Our showroom staff are equipped in hemming and doing minor alterations. Anything beyond will incur an alteration fee starting at P250.`,
    ],
  },
  {
    title: "STUDIO FITTING AND HOME FITTING",
    answers: [
      `Make an appointment for a private fitting with our in-house stylist via the Studio Appointment . lay dress up and treat our space as your own personal closet for 45 minutes. Try on as many of our pieces as you'd like and leave with a look that's perfect for your event.`,
      `Please note that we charge a P350 consumable fee per person for all studio fittings. You may reschedule your studio fitting at no extra charge if done at least 48 hours prior to your scheduled appointment. Failure to do so will result in the forfeiture of your initial fitting fee, and a new fitting fee shall be charged.`,
      `We offer Home Fittings, wherein we send over up to 5 pieces for you to try on in the comfort of your own home. Vestido’s home fitting cost is as follows:`,
      `1-2 items: flat rate of P499 inclusive of dry cleaning and delivery`,
      `(except for Alabang, Paranaque, Rizal and Antipolo--delivery fee of P250 will apply);`,
      `3-5 items: flat rate of P799 inclusive of dry cleaning and delivery`,
      `(except for Alabang, Paranaque, Rizal and Antipolo--delivery fee of P250 will apply)`,
      `Each home fitting is strictly for a 24-hour period only.`,
      `To schedule a home fitting booking, please email us at hello@vestidomanila.com  or send us a message at +639171682621 with the dress(es) you'd like to try, and your event date.`,
      `Please note that we are unable to hold dresses for your actual event date, until a booking order is placed.`,
    ],
  },
];

const FAQList = () => {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2 space-y-1">
      {list.map((item, index) => (
        <div key={index}>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between bg-slate-100 px-4 py-2 text-left text-sm font-medium text-cyan-900 hover:bg-cyan-100 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                  <span>{item.title.toUpperCase()}</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-cyan-500`}
                  />
                </Disclosure.Button>
                {item.answers.map((answer, index) => (
                  <Fragment key={index}>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                      {answer}
                    </Disclosure.Panel>
                  </Fragment>
                ))}
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  );
};

export default FAQList;
