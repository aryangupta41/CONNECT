export const MOOD_COLORS = {
  'in-mood': '#D7263D',
  'craving': '#9B1D20',
  'need-you': '#6A4C93',
  'not-okay': '#495057',
  'distract-me': '#FF8FAB',
};

export const MOOD_DATA = {
  'in-mood': { emoji: '😏', label: 'In a Mood', meaning: 'teasing, flirty, wants attention' },
  'craving': { emoji: '🫶', label: 'Craving You', meaning: 'missing you, wanting closeness' },
  'need-you': { emoji: '🫂', label: 'Need You (Quietly)', meaning: 'wants comfort without questions' },
  'not-okay': { emoji: '🕯️', label: 'Not Okay, But Here', meaning: 'hurt or upset, choosing connection' },
  'distract-me': { emoji: '💫', label: 'Come Distract Me', meaning: 'overthinking, wants you present' },
};

export const DEFAULT_USERS = {
  partnerA: {
    name: 'Aryan',
    online: false,
    mood: 'craving',
    lastSeen: Date.now(),
    avatarUrl: 'https://i.postimg.cc/Y90zGvsg/aryan.png',
  },
  partnerB: {
    name: 'Muskan',
    online: true,
    mood: 'in-mood',
    lastSeen: Date.now() - 3600000,
    avatarUrl: 'https://i.postimg.cc/DZ0PJSMQ/muskan.png',
  },
};

export const DEFAULT_SPOTLIGHTS = [
  {
    id: 1,
    content: 'mujhe pata hai tumhe bura laga hoga ki maine wish nahi kiya buut mujhe direct yahi bhejna tha',
    imageUrl: 'https://i.postimg.cc/25Nx8J0W/Whats-App-Image-2026-01-12-at-00-47-53.jpg',
    createdAt: Date.now(),
    expiresAt: Date.now() + 24 * 60 * 60 * 1000,
    creator: 'partnerA',
  },
  {
    id: 2,
    content: "Every time you open this, remember I'm with you 🫂",
    imageUrl: 'https://i.postimg.cc/zBr57Jpc/Whats_App_Image_2026_01_12_at_00_48_23.jpg',
    createdAt: Date.now(),
    expiresAt: Date.now() + 24 * 60 * 60 * 1000,
    creator: 'partnerA',
  },
  {
    id: 3,
    content: 'you are the bestt ❤️',
    imageUrl: 'https://i.postimg.cc/3RT71Knh/Whats_App_Image_2026_01_12_at_01_16_58.jpg',
    createdAt: Date.now(),
    expiresAt: Date.now() + 24 * 60 * 60 * 1000,
    creator: 'partnerA',
  },
  {
    id: 4,
    content: 'i love you so so so so muchh',
    imageUrl: 'https://i.postimg.cc/Y9HkRp8T/Whats_App_Image_2026_01_12_at_01_16_54.jpg',
    createdAt: Date.now(),
    expiresAt: Date.now() + 24 * 60 * 60 * 1000,
    creator: 'partnerA',
  },
  {
    id: 5,
    content: 'whennnnnnn.....',
    imageUrl: 'https://i.postimg.cc/xC2Y50gh/Whats_App_Image_2026_01_12_at_01_16_55.jpg',
    createdAt: Date.now(),
    expiresAt: Date.now() + 24 * 60 * 60 * 1000,
    creator: 'partnerA',
  },
  {
    id: 6,
    content: 'kaash tumhara birthday aise mana pate',
    imageUrl: 'https://i.postimg.cc/ydHBjVvB/Whats_App_Image_2026_01_12_at_01_16_57.jpg',
    createdAt: Date.now(),
    expiresAt: Date.now() + 24 * 60 * 60 * 1000,
    creator: 'partnerA',
  },
  {
    id: 7,
    content: 'aur aise bhi hehe',
    imageUrl: 'https://i.postimg.cc/qRT0wkQ9/Whats_App_Image_2026_01_12_at_01_16_56.jpg',
    createdAt: Date.now(),
    expiresAt: Date.now() + 24 * 60 * 60 * 1000,
    creator: 'partnerA',
  },
  {
    id: 8,
    content: 'happy birthdayy sweetheart',
    imageUrl: 'https://i.postimg.cc/B60spqM0/Whats_App_Image_2026_01_12_at_01_16_59.jpg',
    createdAt: Date.now(),
    expiresAt: Date.now() + 24 * 60 * 60 * 1000,
    creator: 'partnerA',
  },
];

export const DEFAULT_ALBUMS = [
  {
    id: 1,
    title: 'You Are The Cutest',
    createdAt: Date.now(),
    coverPhoto: 'https://i.postimg.cc/Gmf5yFQy/f155481b_ae81_4343_ab68_b965b7c17fe3.jpg',
    images: [
      { url: 'https://i.postimg.cc/kgHpbQcX/d52d737d_53dc_406a_b9e0_91ea66b3931a.jpg', caption: 'Mann to kar raha isi se maar de tumkoo 🔪🔪' },
      { url: 'https://i.postimg.cc/7L7wSCM4/Whats_App_Image_2026_01_12_at_00_53_28.jpg', caption: '" 💭konse bewakoof ke chakkar me phas gaye hai ..."' },
      { url: 'https://i.postimg.cc/fLNZCw5F/Whats_App_Image_2026_01_12_at_00_53_29.jpg', caption: ' 💭chhodo koi na , apna gulaam banake rakhenge' },
      { url: 'https://i.postimg.cc/2Sytyc4k/11de08ce_c84a_48ab_87dd_d589c4a12069.jpg', caption: 'brush karte samay itna pyarr kon dikhta haii yaar' },
      { url: 'https://i.postimg.cc/2Sytyc46/185b9cb1_293c_4446_993d_571cd6d24fad.jpg', caption: '💋💋' },
      { url: 'https://i.postimg.cc/wjMrMfh8/4db59c59_c1c5_4116_8685_dce81f39e075.jpg', caption: 'kya hua bachhhuuuu' },
      { url: 'https://i.postimg.cc/6pqPqjdN/7bebe396_66f3_4b0d_a0d0_161ea6b632d8.jpg', caption: 'ummmaaaaaahh 💋💋' },
      { url: 'https://i.postimg.cc/hjbZBggh/Whats_App_Image_2026_01_12_at_01_07_58.jpg', caption: 'mast' },
      { url: 'https://i.postimg.cc/Gmf5yFQy/f155481b_ae81_4343_ab68_b965b7c17fe3.jpg', caption: 'kitne lucky hai yaar humm 😭' },
      { url: 'https://i.postimg.cc/RZYDH7Rq/d2092921_494e_46f4_8515_03832fd00a03.jpg', caption: 'mela chhotu chiiii cutu bachhhiii' },
      { url: 'https://i.postimg.cc/wjMrMfhz/8c208378_7fe7_41ef_ac6b_0a4d09c69a81.jpg', caption: 'ummmah ummmah uummmah💋💋💋💋💋💋💋💋' },
    ],
  },
  {
    id: 2,
    title: 'Sexy Cat',
    createdAt: Date.now() - 86400000,
    coverPhoto: 'https://i.postimg.cc/3xNqNS2z/1b485ee3_632f_43df_bc52_d859c024d1f3.jpg',
    images: [
      { url: 'https://i.postimg.cc/g2j7jS3B/0ed970e3_0f7e_4464_8304_3115f541f47f.jpg', caption: 'itna kangali hai ki aise cutu photos ko bhi secy bolna padta hai' },
      { url: 'https://i.postimg.cc/2Sytyc4C/25b797f5_c07c_40e4_8e2c_64fceccb6470.jpg', caption: 'aisa expression mere samne bana degi to khatam hi ho jayenge hum' },
      { url: 'https://i.postimg.cc/3xNqNSgM/7bf870d5_16a6_466f_9f6f_ba118358a29a.jpg', caption: 'nottty girll' },
    ],
  },
  {
    id: 3,
    title: 'koool muskann 😎',
    createdAt: Date.now() - 172800000,
    coverPhoto: 'https://i.postimg.cc/cLCzC9f2/0d67809a_2cb3_4444_ba81_0cc1c5b9986a.jpg',
    images: [
      { url: 'https://i.postimg.cc/x18Z8xL4/1a58e18a_b23e_479b_99a5_4021fb49f7cb.jpg', caption: 'ye leg piece itna patla kyu haii' },
      { url: 'https://i.postimg.cc/SxRPRTWy/11b39eee_8c58_4c0d_9eee_980a1efd2b18.jpg', caption: 'you were kool even before ai' },
      { url: 'https://i.postimg.cc/2Sytyc43/b7de9c32_c2a2_444f_a3bf_1b39bf4df215.jpg', caption: 'chashme me kool photo no. 1' },
      { url: 'https://i.postimg.cc/XYPzCf8j/ba6d753d_f802_47a9_9ced_40f79450e8aa.jpg', caption: 'chashme me kool photo no. 2' },
      { url: 'https://i.postimg.cc/cLzbnRm1/bcc180da_662b_4715_a9e3_7c4b2a7bee2c.jpg', caption: 'ye tum hi ho ??? achha hua first time aisa nahi dikh rahi thi' },
      { url: 'https://i.postimg.cc/RF7syjz8/89afbaa4_8835_4e5e_aff4_e78027580e4c.jpg', caption: 'genuinely cutieee' },
    ],
  },
];

export const DEFAULT_NOTES = [
  {
    id: 1,
    text: 'happiest birthday darling ❤️❤️❤️❤️ mujhe pata nahi mai tumhare bina kya karta kaise rehta even mai apna ek din bhi tuumhare bagair nahi guzar sakta likhne ko to bahuut mann hai par samajh hi nahi aata kya likhu kya naa likhu itna kuch to bola hai maine par tumhe lagta hai sab bas bolne ke liye bolta huu par sach bolu to jitna mai chahta hu tumhare liye karna uska aadha bhi nahi karta tum sach me mere life me mere life se bhi jyada important ho bas thode samay ki baat hai sab sahi ho jayegaa',
    createdAt: Date.now(),
  },
  {
    id: 2,
    text: 'i miss you so so so much , i regret a lot ki kaash jee ke time apna 100% dedeta please ye chiz tumhare sath bhi nahi hone dena chahta bas 3 mahine achhe se padh lo then you will know how much i love you ..',
    createdAt: Date.now(),
  },
];

export const DEFAULT_DATES = [
  { id: 1, title: 'Anniversary', date: '2026-09-06' },
];
