<script>
  // import FeatureImageLeft from "$components/FeatureImageLeft.svelte";
  // import FeatureImageRight from "$components/FeatureImageRight.svelte";
  import Hero from "$components/Hero.svelte";
  // import BuyDetail from "$components/BuyDetail.svelte";
  // import SellOfferDetail from "$components/SellOfferDetail.svelte";
  // import MakeOffer from "$components/MakeOffer.svelte";
  // import Create from "$components/Create.svelte";
  // import Filter from "$components/Filter.svelte";
  // import History from "$components/History.svelte";
  // import Messenger from "$components/Messenger.svelte";
  // import Currencies from "$components/Currencies.svelte";
  // import Account from "$components/Account.svelte";
  import FeatureSection from "$components/FeatureSection.svelte";
  import Footer from "$components/Footer.svelte";
</script>

<Hero />

<FeatureSection
  imageSide="left"
  imageUrl="/BuyDetail.png"
  title="Create Buy & Sell Listings"
  description="Easily create Buy and Sell type listings to make buying and selling seafood easy. Want to sell seafood? Create a Buy listing. Want to buy seafood? Create a Sell Listing."
/>

<FeatureSection
  imageSide="right"
  imageUrl="/SellOfferDetail.png"
  title="Simple Pricing & Payments"
  description="Pricing made simple. The seller pays $0.04 USD/lbs regardless of seafood type or location. Payment is simplified using a single wire payment. We route your payment to the seller to make purchasing easy."
/>

<FeatureSection
  imageSide="left"
  imageUrl="/MakeOffer.png"
  title="Make Offers"
  description="If you'd like to allow buyers or sellers to suggest a price you can add Offers to your listing. You set a base price in your listing but Offers give buyers and sellers the option to suggest another price."
/>

<FeatureSection
  imageSide="right"
  imageUrl="/Create.png"
  title="Creating Listings"
  description="Creating listings is easy. Select the seafood you want to sell, list how much you have to sell, set your price, add a description, upload pictures, and list it in the marketplace."
/>

<FeatureSection
  imageSide="left"
  imageUrl="/Filter.png"
  title="Quickly Filter"
  description="Quickly filter the listings in the marketplace to make buying and selling easy. If you do not see what you are looking for then create a listing for others to view."
/>

<FeatureSection
  imageSide="right"
  imageUrl="/History.png"
  title="Manage Orders, Offers, & Listings"
  description="Easily manage your orders, offers and listings in one central location. Make payments, accept or reject offers and manage your listings."
/>

<FeatureSection
  imageSide="left"
  imageUrl="/Messenger.png"
  title="Built In Messenger"
  description="Our built in messenger makes communicating with buyers and sellers easy. Send text, picture, and video messages to help market your product and create piece of mind for buyers."
/>

<FeatureSection
  imageSide="right"
  imageUrl="/Currencies.png"
  title="38 Currencies"
  description="Buy and Sell in the currency that makes sense for your business. When creating a listing select one of the following currencies. AED, AUD, BGN, BHD, CAD, CHF, CNY, CZK, DKK, EUR, GBP, HKD, HRK, HUF, IDR, ILS, INR, JPY, KES, KWD, MXN, MYR, NOK, NZD, OMR, PHP, PLN, QAR, RON, RUB, SAR, SEK, SGD, THB, TRY, UGX, USD, ZAR"
/>

<FeatureSection
  imageSide="left"
  imageUrl="/Account.png"
  title="Account Management"
  description="Manage your account in one simple locaiton. Profile image, email address, business addresses, bank accounts, etc."
/>

<Footer />

<!-- <BuyDetail />
<SellOfferDetail />
<MakeOffer />
<Create />
<Filter />
<History />
<Messenger />
<Currencies />
<Account />
<div class="relative pt-16 pb-32 overflow-hidden">
  <FeatureImageLeft />
  <FeatureImageRight />
</div> -->
