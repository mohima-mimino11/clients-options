import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
  const gymMemberships = [
    {
        id: 1,
        name: "Basic Plan",
        price: 29.99,
        duration: "1 Month",
        features: [
            "Access to all gym equipment",
            "Locker room and shower facilities",
            "Free Wi-Fi access",
            "No long-term contract",
            "Fitness assessment (1 session)",
            "Access to gym during standard hours",
            "Monthly progress tracking",
            "Discounts on gym merchandise (10%)"
        ]
    },
    {
        id: 2,
        name: "Standard Plan",
        price: 79.99,
        duration: "3 Months",
        features: [
            "All Basic Plan features",
            "Unlimited group fitness classes (yoga, Zumba, spinning, etc.)",
            "Personal trainer consultation (2 sessions)",
            "Access to sauna and steam room",
            "Nutritional guidance (1 session)",
            "24/7 gym access",
            "Discounts on gym merchandise (20%)",
            "Complimentary gym towel service",
            "Access to member-only events"
        ]
    },
    {
        id: 3,
        name: "Premium Plan",
        price: 149.99,
        duration: "6 Months",
        features: [
            "All Standard Plan features",
            "Personal trainer consultation (5 sessions)",
            "Customized workout plan",
            "Access to premium fitness classes (HIIT, Pilates, etc.)",
            "Nutritional guidance (3 sessions)",
            "Complimentary gym gear (water bottle and gym bag)",
            "Discounts on gym merchandise (30%)",
            "Access to exclusive member lounges",
            "Free guest pass (2 passes per month)",
            "Priority booking for classes"
        ]
    },
    {
        id: 4,
        name: "Ultimate Plan",
        price: 249.99,
        duration: "12 Months",
        features: [
            "All Premium Plan features",
            "Personal trainer consultation (10 sessions)",
            "Customized meal plan",
            "Access to all premium and specialty classes",
            "Nutritional guidance (6 sessions)",
            "Complimentary gym gear (full set: shoes, towel, bag)",
            "Discounts on gym merchandise (50%)",
            "Free guest pass (4 passes per month)",
            "Access to VIP member events",
            "Complimentary spa treatments (2 sessions)",
            "Priority access to new equipment",
            "Exclusive discounts on partner brands"
        ]
    }
];
  return (
    <div>
      <h2 className="text-5xl">Best Prices In Town</h2>
      <div className="grid md:grid-cols-3 gap-6">
      {
        gymMemberships.map(member => <PriceOption key={member.id} member={member}></PriceOption>)
      }
      </div>
    </div>
  );
};

export default PriceOptions;