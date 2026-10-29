/**
 * ANIMAL ENCYCLOPEDIA — Gamility Explorer
 * Client-Side Interactive Biodiversity Database, Bio-Acoustic Audio & Comparator
 * Copyright © 2026 Gamility (All Rights Reserved)
 */

(function () {
  'use strict';

  // ==========================================================================
  // SPECIES DATABASE (24 Verified Species with Photorealistic Media & Audio)
  // ==========================================================================
  const SPECIES_DATA = [
    {
      "id": "african-lion",
      "commonName": "African Lion",
      "scientificName": "Panthera leo",
      "emoji": "🦁",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/9225318/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/lion_roar.ogg",
      "biome": "savannah",
      "biomeName": "Savannah & Grasslands",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Felidae",
      "diet": "Carnivore",
      "iucn": "VU",
      "iucnTitle": "Vulnerable",
      "topSpeedKmh": 80,
      "weightKg": 190,
      "lifespanYears": 15,
      "lengthM": "2.5 m",
      "gestation": "110 days",
      "nativeRange": "Sub-Saharan Africa, Gir Forest (India)",
      "socialStructure": "Prides (10–30 related lions & cubs)",
      "ecologicalRole": "Keystone apex predator regulating herbivore populations",
      "soundType": "lion-roar",
      "soundName": "Territorial Pride Roar",
      "shortBio": "Known as the King of Beasts, the African lion is the only truly social big cat on Earth, hunting cooperatively in complex pride structures.",
      "funFacts": [
        "A lion’s reverberating roar can be heard from up to 8 kilometers (5 miles) away.",
        "Female lions (lionesses) conduct approximately 85% to 90% of the pride’s hunting.",
        "Lions spend up to 20 hours a day resting and sleeping to conserve energy for night hunts."
      ]
    },
    {
      "id": "african-elephant",
      "commonName": "African Bush Elephant",
      "scientificName": "Loxodonta africana",
      "emoji": "🐘",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/93674728/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/elephant_trumpet.ogg",
      "biome": "savannah",
      "biomeName": "Savannah & Grasslands",
      "class": "Mammalia",
      "order": "Proboscidea",
      "family": "Elephantidae",
      "diet": "Herbivore",
      "iucn": "EN",
      "iucnTitle": "Endangered",
      "topSpeedKmh": 40,
      "weightKg": 6000,
      "lifespanYears": 70,
      "lengthM": "6.5 m",
      "gestation": "660 days",
      "nativeRange": "Sub-Saharan African savannahs and woodlands",
      "socialStructure": "Matriarchal herds of related females and calves",
      "ecologicalRole": "Ecosystem engineer clearing savannah brush, digging water holes, and disbursing seeds",
      "soundType": "elephant-trumpet",
      "soundName": "Brass Resonant Trumpet Blast",
      "shortBio": "The largest living terrestrial animal, possessing profound emotional intelligence, sophisticated memory, and deep infrasonic communication.",
      "funFacts": [
        "An elephant trunk contains over 40,000 individual muscles without a single bone, capable of lifting tree trunks or picking a tiny peanut.",
        "They communicate across miles using low-frequency seismic infrasound vibrations felt through nerve endings in their feet.",
        "African elephants have the longest gestation period of any mammal: approximately 22 months (nearly two full years)."
      ]
    },
    {
      "id": "cheetah",
      "commonName": "Cheetah",
      "scientificName": "Acinonyx jubatus",
      "emoji": "🐆",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/57582224/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/cougar_growl.ogg",
      "biome": "savannah",
      "biomeName": "Savannah & Grasslands",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Felidae",
      "diet": "Carnivore",
      "iucn": "VU",
      "iucnTitle": "Vulnerable",
      "topSpeedKmh": 112,
      "weightKg": 54,
      "lifespanYears": 12,
      "lengthM": "1.5 m",
      "gestation": "93 days",
      "nativeRange": "Eastern and Southern Africa, small pocket in Iran",
      "socialStructure": "Male coalitions; solitary females except with cubs",
      "ecologicalRole": "Diurnal pursuit predator specializing in nimble gazelles and impalas",
      "soundType": "chirp",
      "soundName": "Savannah Territorial Chuff & Growl",
      "shortBio": "The fastest terrestrial land animal on Earth, capable of accelerating from 0 to 97 km/h (60 mph) in under three seconds—faster than most sports supercars.",
      "funFacts": [
        "Unlike other big cats, cheetahs cannot roar; they purr, hiss, and vocalize using bird-like chirps.",
        "Their semi-retractable claws act like athletic running cleats to give unbeatable traction on soil.",
        "Dark \"tear stripes\" running from their inner eyes to their mouth deflect blinding savannah sunlight."
      ]
    },
    {
      "id": "plains-zebra",
      "commonName": "Plains Zebra",
      "scientificName": "Equus quagga",
      "emoji": "🦓",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/335469754/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/horse_whinny.ogg",
      "biome": "savannah",
      "biomeName": "Savannah & Grasslands",
      "class": "Mammalia",
      "order": "Perissodactyla",
      "family": "Equidae",
      "diet": "Herbivore",
      "iucn": "NT",
      "iucnTitle": "Near Threatened",
      "topSpeedKmh": 68,
      "weightKg": 320,
      "lifespanYears": 25,
      "lengthM": "2.4 m",
      "gestation": "365 days",
      "nativeRange": "Eastern and Southern Africa grasslands",
      "socialStructure": "Harems led by a stallion, joining massive migratory herds",
      "ecologicalRole": "Pioneer grazer mowing tough grass stems for gazelles and wildebeest",
      "soundType": "chirp",
      "soundName": "High-Pitched Bark & Whinny",
      "shortBio": "Famous for high-contrast optical stripes that confuse biting tsetse flies and thermoregulate body heat across the sweltering East African savannah.",
      "funFacts": [
        "Every zebra possesses a completely unique stripe pattern, as individual as a human fingerprint.",
        "Zebras sleep standing up, locking their leg joints so they can sprint immediately if lions attack.",
        "Beneath their black and white striped fur, a zebra’s skin is entirely solid black."
      ]
    },
    {
      "id": "giraffe",
      "commonName": "Northern Giraffe",
      "scientificName": "Giraffa camelopardalis",
      "emoji": "🦒",
      "imageUrl": "https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=800&q=80",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/small_animal_squeak.ogg",
      "biome": "savannah",
      "biomeName": "Savannah & Grasslands",
      "class": "Mammalia",
      "order": "Artiodactyla",
      "family": "Giraffidae",
      "diet": "Herbivore",
      "iucn": "VU",
      "iucnTitle": "Vulnerable",
      "topSpeedKmh": 56,
      "weightKg": 1200,
      "lifespanYears": 25,
      "lengthM": "5.5 m (height)",
      "gestation": "450 days",
      "nativeRange": "Sub-Saharan African open acacia savannahs",
      "socialStructure": "Loose, open-membership towers",
      "ecologicalRole": "High-canopy acacia browser shaping savannah vegetation architecture",
      "soundType": "chirp",
      "soundName": "Low Nocturnal Infrasonic Hum",
      "shortBio": "The tallest living mammal on planet Earth, boasting a 2-meter long neck, prehensile purple-black tongue, and powerful cardiovascular adaptations.",
      "funFacts": [
        "A giraffe’s heart weighs about 11 kilograms (24 lbs) and creates blood pressure twice that of a human to pump blood up its neck.",
        "Their 45-cm (18-inch) prehensile tongue is dark purple to protect it from sunburn while feeding all day.",
        "Giraffes only need between 10 to 30 minutes of sleep each day, taken in brief 2-minute power naps."
      ]
    },
    {
      "id": "hippopotamus",
      "commonName": "Common Hippopotamus",
      "scientificName": "Hippopotamus amphibius",
      "emoji": "🦛",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/13896177/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/alligator_bellow.ogg",
      "biome": "savannah",
      "biomeName": "Savannah & Grasslands",
      "class": "Mammalia",
      "order": "Artiodactyla",
      "family": "Hippopotamidae",
      "diet": "Herbivore",
      "iucn": "VU",
      "iucnTitle": "Vulnerable",
      "topSpeedKmh": 30,
      "weightKg": 1500,
      "lifespanYears": 45,
      "lengthM": "4.0 m",
      "gestation": "240 days",
      "nativeRange": "Sub-Saharan African rivers, lakes, and mangrove swamps",
      "socialStructure": "Pods of 10 to 30 led by a territorial river bull",
      "ecologicalRole": "Key aquatic-terrestrial nutrient conveyor via river dung deposition",
      "soundType": "rattle",
      "soundName": "Resonant River Bellow & Honk",
      "shortBio": "A semi-aquatic heavyweight that spends scorching days submerged in rivers and grazes on riverbank grasses by night, equipped with natural sunscreen sweat.",
      "funFacts": [
        "Hippos secrete a reddish, oily fluid called \"blood sweat\" that acts as natural antibiotic, sunscreen, and moisturizer.",
        "Despite weighing over 1.5 tons, hippos cannot swim or float—they gallop along riverbeds underwater.",
        "A hippo can open its jaws up to 150 degrees, revealing razor-sharp canine tusks up to 50 cm long."
      ]
    },
    {
      "id": "red-kangaroo",
      "commonName": "Red Kangaroo",
      "scientificName": "Osphranter rufus",
      "emoji": "🦘",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/164668615/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/small_animal_squeak.ogg",
      "biome": "desert",
      "biomeName": "Desert & Arid",
      "class": "Mammalia",
      "order": "Diprotodontia",
      "family": "Macropodidae",
      "diet": "Herbivore",
      "iucn": "LC",
      "iucnTitle": "Least Concern",
      "topSpeedKmh": 70,
      "weightKg": 90,
      "lifespanYears": 22,
      "lengthM": "2.0 m (standing)",
      "gestation": "33 days (pouch joey)",
      "nativeRange": "Arid interior and scrublands of mainland Australia",
      "socialStructure": "Mobs of up to 50 kangaroos grazing across open plains",
      "ecologicalRole": "Primary native herbivore maintaining arid Australian grassland ecosystems",
      "soundType": "chirp",
      "soundName": "Outback Guttural Cough & Cluck",
      "shortBio": "The largest living marsupial on Earth, using elastic achilles tendons like biological pogo sticks to bound across the arid red Australian Outback.",
      "funFacts": [
        "A red kangaroo can clear over 9 meters (30 feet) in a single horizontal leap and hop at 60 km/h with incredible energy efficiency.",
        "Newborn kangaroo joeys are born the size of a jellybean (barely 2 cm long) and crawl into their mother’s pouch unaided.",
        "Kangaroos cannot walk backwards because of their thick, muscular muscular third-leg tail and fused leg anatomy."
      ]
    },
    {
      "id": "koala",
      "commonName": "Koala",
      "scientificName": "Phascolarctos cinereus",
      "emoji": "🐨",
      "imageUrl": "https://static.inaturalist.org/photos/425371537/large.jpeg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/bear_cub_grunt.ogg",
      "biome": "forest",
      "biomeName": "Temperate Forest",
      "class": "Mammalia",
      "order": "Diprotodontia",
      "family": "Phascolarctidae",
      "diet": "Herbivore",
      "iucn": "EN",
      "iucnTitle": "Endangered",
      "topSpeedKmh": 10,
      "weightKg": 12,
      "lifespanYears": 15,
      "lengthM": "0.8 m",
      "gestation": "35 days (pouch joey)",
      "nativeRange": "Eucalyptus woodlands of Eastern and Southeastern Australia",
      "socialStructure": "Solitary, strictly arboreal tree-dwellers",
      "ecologicalRole": "Specialized canopy pruner recycling eucalyptus forest nutrients",
      "soundType": "chirp",
      "soundName": "Deep Resonant Mating Bellow",
      "shortBio": "An iconic Australian tree-dwelling marsupial adapted to subsist exclusively on toxic, fibrous eucalyptus leaves thanks to specialized liver enzymes.",
      "funFacts": [
        "Koalas sleep between 18 to 22 hours a day to conserve energy while their digestive system breaks down toxic eucalyptus leaves.",
        "Like humans, koalas possess unique individual fingerprints that are indistinguishable from human prints under a microscope.",
        "The word \"koala\" originates from the Indigenous Dharug language, translating loosely to \"no drink\" because they obtain 90% of hydration from leaves."
      ]
    },
    {
      "id": "gray-wolf",
      "commonName": "Gray Wolf",
      "scientificName": "Canis lupus",
      "emoji": "🐺",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/43410580/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/wolf_howl.ogg",
      "biome": "forest",
      "biomeName": "Temperate Forest",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Canidae",
      "diet": "Carnivore",
      "iucn": "LC",
      "iucnTitle": "Least Concern",
      "topSpeedKmh": 60,
      "weightKg": 45,
      "lifespanYears": 13,
      "lengthM": "1.6 m",
      "gestation": "63 days",
      "nativeRange": "North America, Eurasia, Northern Africa",
      "socialStructure": "Tight-knit nuclear family packs led by breeding pair",
      "ecologicalRole": "Classic keystone predator driving trophic cascades that restore riparian ecosystems",
      "soundType": "wolf-howl",
      "soundName": "Haunting Midnight Pack Howl",
      "shortBio": "A legendary master of endurance, intelligence, and collective teamwork, capable of traversing up to 50 km per day tracking elk and bison.",
      "funFacts": [
        "Wolf packs use harmonious multi-pitch howling so rival packs perceive their numbers as much larger than they actually are.",
        "Their sense of smell is roughly 100 times keener than a human’s, detecting prey nearly 3 km away.",
        "The reintroduction of wolves into Yellowstone National Park famously revived riverbanks by preventing elk overgrazing."
      ]
    },
    {
      "id": "grizzly-bear",
      "commonName": "Grizzly Bear",
      "scientificName": "Ursus arctos horribilis",
      "emoji": "🐻",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/1491897/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/grizzly_bear_growl.ogg",
      "biome": "forest",
      "biomeName": "Temperate Forest",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Ursidae",
      "diet": "Omnivore",
      "iucn": "LC",
      "iucnTitle": "Least Concern",
      "topSpeedKmh": 56,
      "weightKg": 360,
      "lifespanYears": 25,
      "lengthM": "2.4 m",
      "gestation": "210 days",
      "nativeRange": "Western North America (Alaska, Canada, Northern Rockies)",
      "socialStructure": "Solitary except mothers with cubs; aggregates at salmon runs",
      "ecologicalRole": "Apex seed disperser and soil aerator depositing vital marine nutrients inland",
      "soundType": "lion-roar",
      "soundName": "Grizzly Territorial Growl",
      "shortBio": "A powerhouse of raw strength and resilience, boasting a pronounced shoulder hump of digging muscles and an unmatched seasonal hyperphagia drive.",
      "funFacts": [
        "The hump on a grizzly’s back is pure muscle used to dig through rocky mountain scree for roots, rodents, and winter dens.",
        "During pre-winter hyperphagia, a grizzly can consume up to 40 kg (90 lbs) of food and gain over 1.5 kg of fat every single day.",
        "During winter torpor, their heart rate drops from 40 beats per minute down to just 8, without experiencing bone or muscle loss."
      ]
    },
    {
      "id": "giant-panda",
      "commonName": "Giant Panda",
      "scientificName": "Ailuropoda melanoleuca",
      "emoji": "🐼",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/150277588/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/bear_cub_grunt.ogg",
      "biome": "forest",
      "biomeName": "Temperate Forest",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Ursidae",
      "diet": "Herbivore",
      "iucn": "VU",
      "iucnTitle": "Vulnerable",
      "topSpeedKmh": 32,
      "weightKg": 110,
      "lifespanYears": 20,
      "lengthM": "1.5 m",
      "gestation": "135 days",
      "nativeRange": "Mountain bamboo forests of Southwestern China (Sichuan, Shaanxi)",
      "socialStructure": "Solitary; communicates via scent posts and tree scratches",
      "ecologicalRole": "Bamboo forest gardener distributing seeds and opening dense understories",
      "soundType": "chirp",
      "soundName": "Melodic Squeak & Grunt",
      "shortBio": "The beloved global ambassador of wildlife conservation, possessing a carnivore digestive system that has evolved to subsist 99% on fibrous mountain bamboo.",
      "funFacts": [
        "A giant panda spends up to 14 hours every single day eating as much as 38 kg (84 lbs) of bamboo shoots and leaves.",
        "Panda cubs are born blind, pink, and hairless, weighing barely 100 grams (1/900th the size of their mother).",
        "Thanks to intensive habitat reforestation and anti-poaching reserves, their IUCN status was officially upgraded from Endangered to Vulnerable."
      ]
    },
    {
      "id": "red-panda",
      "commonName": "Red Panda",
      "scientificName": "Ailurus fulgens",
      "emoji": "🦊",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/26989188/large.jpeg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/small_animal_squeak.ogg",
      "biome": "forest",
      "biomeName": "Temperate Forest",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Ailuridae",
      "diet": "Herbivore",
      "iucn": "EN",
      "iucnTitle": "Endangered",
      "topSpeedKmh": 32,
      "weightKg": 5.5,
      "lifespanYears": 14,
      "lengthM": "0.6 m (plus 0.4 m tail)",
      "gestation": "135 days",
      "nativeRange": "Eastern Himalayas and Southwestern China",
      "socialStructure": "Solitary, arboreal, mostly active at dusk and dawn",
      "ecologicalRole": "Key bamboo specialist and Himalayan seed disperser",
      "soundType": "chirp",
      "soundName": "Canopy Twitter & Squeak",
      "shortBio": "A living fossil with no close living relatives, the red panda is an arboreal bamboo specialist equipped with a specialized \"false thumb\" for gripping stems.",
      "funFacts": [
        "Red pandas have an elongated wrist bone that acts as a false thumb, allowing them to grasp slippery bamboo leaves.",
        "When frightened, they stand straight up on their hind legs and extend their front paws to appear larger and more intimidating.",
        "They spend up to 13 hours each day eating up to 200,000 bamboo leaves to meet their daily nutritional needs."
      ]
    },
    {
      "id": "bengal-tiger",
      "commonName": "Bengal Tiger",
      "scientificName": "Panthera tigris tigris",
      "emoji": "🐅",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/13207883/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/tiger_growl.ogg",
      "biome": "rainforest",
      "biomeName": "Tropical Rainforest",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Felidae",
      "diet": "Carnivore",
      "iucn": "EN",
      "iucnTitle": "Endangered",
      "topSpeedKmh": 65,
      "weightKg": 220,
      "lifespanYears": 16,
      "lengthM": "3.1 m",
      "gestation": "105 days",
      "nativeRange": "India, Bangladesh (Sundarbans), Nepal, Bhutan",
      "socialStructure": "Solitary and strictly territorial with marked scent boundaries",
      "ecologicalRole": "Keystone umbrella predator protecting biodiverse subtropical forest ecosystems",
      "soundType": "lion-roar",
      "soundName": "Fierce Jungle Canopy Roar",
      "shortBio": "The most iconic big cat of Asia, possessing breathtaking muscular power, exceptional swimming skills, and an unmistakable amber-and-black camouflage coat.",
      "funFacts": [
        "No two tigers share the same pattern of stripes; like human fingerprints, every tiger’s stripe pattern is totally unique.",
        "Tigers love water and are extraordinary swimmers, readily swimming across wide rivers up to 7 km across to hunt.",
        "A tiger’s night vision is roughly six times sharper than that of a human."
      ]
    },
    {
      "id": "snow-leopard",
      "commonName": "Snow Leopard",
      "scientificName": "Panthera uncia",
      "emoji": "🐆",
      "imageUrl": "https://images.unsplash.com/photo-1639841377321-b54eab2c8430?auto=format&fit=crop&w=800&q=80",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/cougar_growl.ogg",
      "biome": "mountain",
      "biomeName": "Mountain & Alpine",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Felidae",
      "diet": "Carnivore",
      "iucn": "VU",
      "iucnTitle": "Vulnerable",
      "topSpeedKmh": 64,
      "weightKg": 40,
      "lifespanYears": 18,
      "lengthM": "1.3 m",
      "gestation": "98 days",
      "nativeRange": "High alpine mountains of Central and South Asia (Himalayas)",
      "socialStructure": "Solitary ghost of the mountains, highly elusive",
      "ecologicalRole": "Controls wild mountain ungulate herds (blue sheep, ibex) on steep scree slopes",
      "soundType": "chirp",
      "soundName": "Muted Alpine Chuff & Growl",
      "shortBio": "Revered as the \"Ghost of the Mountains\", the snow leopard is perfectly adapted to survive on sheer, frozen cliffs up to 5,500 meters altitude.",
      "funFacts": [
        "Their colossal thick tail can measure up to 1 meter long, used as a balancing rudder on cliffs and wrapped around the face as a winter scarf.",
        "Wide paws act as natural snowshoes, distributing body weight so they do not sink into soft mountain powder.",
        "Snow leopards can leap up to 15 meters (50 feet) horizontally in a single explosive rock-to-rock bound."
      ]
    },
    {
      "id": "blue-whale",
      "commonName": "Blue Whale",
      "scientificName": "Balaenoptera musculus",
      "emoji": "🐋",
      "imageUrl": "https://static.inaturalist.org/photos/194385336/large.jpg",
      "audioUrl": "https://upload.wikimedia.org/wikipedia/commons/9/91/Blue_whale_vocalizations.ogg",
      "biome": "ocean",
      "biomeName": "Ocean & Marine",
      "class": "Mammalia",
      "order": "Artiodactyla",
      "family": "Balaenopteridae",
      "diet": "Carnivore",
      "iucn": "EN",
      "iucnTitle": "Endangered",
      "topSpeedKmh": 50,
      "weightKg": 150000,
      "lifespanYears": 90,
      "lengthM": "30 m",
      "gestation": "365 days",
      "nativeRange": "Global pelagic oceans (except Arctic ice caps)",
      "socialStructure": "Solitary or small loose mother-calf pairs",
      "ecologicalRole": "Massive nutrient recycler via the ocean krill-whale iron loop",
      "soundType": "whale-song",
      "soundName": "Abyssal Low-Frequency Song",
      "shortBio": "The blue whale is the largest known animal to have ever lived on planet Earth—surpassing even the heaviest prehistoric titanosaur dinosaurs.",
      "funFacts": [
        "A blue whale’s heart is the size of a small car and pumps over 220 liters of blood per beat.",
        "Their tongue alone can weigh as much as an entire adult African elephant (approx. 2.7 metric tons).",
        "In one mouthful, a blue whale can engulf up to 110 metric tons of water and krill."
      ]
    },
    {
      "id": "bottlenose-dolphin",
      "commonName": "Common Bottlenose Dolphin",
      "scientificName": "Tursiops truncatus",
      "emoji": "🐬",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/611231392/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/dolphin_call.ogg",
      "biome": "ocean",
      "biomeName": "Ocean & Marine",
      "class": "Mammalia",
      "order": "Artiodactyla",
      "family": "Delphinidae",
      "diet": "Carnivore",
      "iucn": "LC",
      "iucnTitle": "Least Concern",
      "topSpeedKmh": 35,
      "weightKg": 280,
      "lifespanYears": 45,
      "lengthM": "3.2 m",
      "gestation": "365 days",
      "nativeRange": "Tropical and temperate oceans and coastal estuaries worldwide",
      "socialStructure": "Complex fission-fusion pods with lifelong alliances",
      "ecologicalRole": "Intelligent school fish predator and oceanic ecosystem health sentinel",
      "soundType": "dolphin-clicks",
      "soundName": "Ocean Echolocation Whistle & Clicks",
      "shortBio": "Renowned for exceptional self-awareness, vocal mimicry, cooperative hunting maneuvers, and an intricate dialect of signature whistles.",
      "funFacts": [
        "Each dolphin develops a unique \"signature whistle\" in infancy that acts like their own personal name.",
        "Dolphins sleep with only one brain hemisphere at a time (unihemispheric sleep), keeping one eye open for sharks.",
        "They emit up to 1,000 ultrasonic clicks per second to create acoustic 3D mental images through echolocation."
      ]
    },
    {
      "id": "orca",
      "commonName": "Orca (Killer Whale)",
      "scientificName": "Orcinus orca",
      "emoji": "🐋",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/223550594/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/dolphin_call.ogg",
      "biome": "ocean",
      "biomeName": "Ocean & Marine",
      "class": "Mammalia",
      "order": "Artiodactyla",
      "family": "Delphinidae",
      "diet": "Carnivore",
      "iucn": "DD",
      "iucnTitle": "Data Deficient",
      "topSpeedKmh": 56,
      "weightKg": 5500,
      "lifespanYears": 80,
      "lengthM": "8.5 m",
      "gestation": "510 days",
      "nativeRange": "Worldwide oceans, abundant in cold coastal polar waters",
      "socialStructure": "Lifelong matrilineal pods with distinct cultural dialects",
      "ecologicalRole": "Apex marine predator at the top of the global oceanic food chain",
      "soundType": "dolphin-clicks",
      "soundName": "Complex Pod Dialect & Echolocation",
      "shortBio": "The largest member of the oceanic dolphin family, possessing unmatched predatory intelligence, matrilineal pod cultures, and specialized hunting tactics.",
      "funFacts": [
        "Orcas are apex predators with zero natural enemies in the wild—not even the great white shark hunts them.",
        "Different pods possess distinct acoustic dialects, greeting ceremonies, and passed-down hunting techniques (such as wave-washing seals off ice floes).",
        "Like humans, female orcas experience menopause and spend decades leading their pods as wise grandmothers."
      ]
    },
    {
      "id": "fennec-fox",
      "commonName": "Fennec Fox",
      "scientificName": "Vulpes zerda",
      "emoji": "🦊",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/178694522/large.jpeg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/fox_bark.ogg",
      "biome": "desert",
      "biomeName": "Desert & Arid",
      "class": "Mammalia",
      "order": "Carnivora",
      "family": "Canidae",
      "diet": "Omnivore",
      "iucn": "LC",
      "iucnTitle": "Least Concern",
      "topSpeedKmh": 35,
      "weightKg": 1.4,
      "lifespanYears": 12,
      "lengthM": "0.35 m",
      "gestation": "50 days",
      "nativeRange": "Sahara Desert of North Africa",
      "socialStructure": "Monogamous pairs with small family clans in underground dens",
      "ecologicalRole": "Controls nocturnal desert rodents, insects, and lizards",
      "soundType": "chirp",
      "soundName": "High-Pitch Desert Yip & Chatter",
      "shortBio": "The smallest canid species in the world, sporting enormous 15-cm ears that radiate intense desert body heat and pinpoint insects burrowing deep in sand dunes.",
      "funFacts": [
        "Their huge ears serve as biological heat radiators, cooling blood flowing through dense capillary networks.",
        "The bottoms of their paws are covered in dense fur that protects them from blistering hot 60°C desert sands.",
        "Fennec foxes can survive indefinitely without drinking liquid water, deriving all hydration from moisture in their food."
      ]
    },
    {
      "id": "platypus",
      "commonName": "Duck-billed Platypus",
      "scientificName": "Ornithorhynchus anatinus",
      "emoji": "🦆",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/430934363/large.jpeg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/small_animal_squeak.ogg",
      "biome": "forest",
      "biomeName": "Temperate Forest",
      "class": "Mammalia",
      "order": "Monotremata",
      "family": "Ornithorhynchidae",
      "diet": "Carnivore",
      "iucn": "NT",
      "iucnTitle": "Near Threatened",
      "topSpeedKmh": 8,
      "weightKg": 2.1,
      "lifespanYears": 17,
      "lengthM": "0.5 m",
      "gestation": "10 days (incubation)",
      "nativeRange": "Eastern Australia and Tasmania freshwater rivers",
      "socialStructure": "Solitary semi-aquatic burrowers",
      "ecologicalRole": "Freshwater benthic predator controlling aquatic insect larvae, shrimp, and worms",
      "soundType": "chirp",
      "soundName": "Submerged Low Growl & Churr",
      "shortBio": "One of only five surviving species of monotremes (egg-laying mammals), possessing a duck bill, beaver tail, otter feet, venomous ankle spurs, and electrolocation.",
      "funFacts": [
        "Male platypuses possess a hollow calcaneus spur on each hind ankle connected to a venom gland, capable of causing excruciating pain.",
        "They hunt with eyes, ears, and nostrils closed shut underwater, navigating entirely via electro-receptors in their flexible leathery bill.",
        "Platypus fur glows a luminous cyan-green under ultraviolet light (biofluorescence)."
      ]
    },
    {
      "id": "peregrine-falcon",
      "commonName": "Peregrine Falcon",
      "scientificName": "Falco peregrinus",
      "emoji": "🦅",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/212499566/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/hawk_screech.ogg",
      "biome": "mountain",
      "biomeName": "Mountain & Alpine",
      "class": "Aves",
      "order": "Falconiformes",
      "family": "Falconidae",
      "diet": "Carnivore",
      "iucn": "LC",
      "iucnTitle": "Least Concern",
      "topSpeedKmh": 389,
      "weightKg": 1.2,
      "lifespanYears": 16,
      "lengthM": "0.5 m (wingspan 1.1 m)",
      "gestation": "33 days (incubation)",
      "nativeRange": "Cosmopolitan: found on every continent except Antarctica",
      "socialStructure": "Monogamous pairs fiercely defending cliff nest aeries",
      "ecologicalRole": "High-altitude aerial predator controlling medium-sized bird populations",
      "soundType": "falcon-screech",
      "soundName": "High-Velocity Hunting Screech",
      "shortBio": "The undisputed fastest member of the animal kingdom, reaching breathtaking supersonic stoop dive speeds of over 380 km/h (240 mph).",
      "funFacts": [
        "Special aerodynamic nostrils baffle high-speed airflow so the falcon can breathe while diving at 380+ km/h.",
        "A transparent third eyelid (nictitating membrane) protects their eyes during extreme dives without blocking vision.",
        "Peregrines can strike prey with a clenched talon foot like a mid-air boxer, incapacitating targets instantly."
      ]
    },
    {
      "id": "emperor-penguin",
      "commonName": "Emperor Penguin",
      "scientificName": "Aptenodytes forsteri",
      "emoji": "🐧",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/7229/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/bird_whistle.ogg",
      "biome": "polar",
      "biomeName": "Polar & Tundra",
      "class": "Aves",
      "order": "Sphenisciformes",
      "family": "Spheniscidae",
      "diet": "Carnivore",
      "iucn": "NT",
      "iucnTitle": "Near Threatened",
      "topSpeedKmh": 9,
      "weightKg": 35,
      "lifespanYears": 20,
      "lengthM": "1.2 m",
      "gestation": "65 days (incubation)",
      "nativeRange": "Circumpolar Antarctica and surrounding pack ice",
      "socialStructure": "Massive colonies that huddle together in sub-zero blizzards",
      "ecologicalRole": "Major marine predator balancing Antarctic krill, squid, and silverfish",
      "soundType": "chirp",
      "soundName": "Colonial Contact Whistle & Call",
      "shortBio": "The tallest and heaviest of all living penguin species, enduring bone-chilling Antarctic winter temperatures of -60°C and 200 km/h winds.",
      "funFacts": [
        "Male emperors fast for over two months straight in howling Antarctic blizzards while balancing a single egg on top of their feet.",
        "Emperors can dive to astonishing oceanic depths of over 530 meters (1,750 feet) and hold their breath for 22 minutes.",
        "Their feathers are the densest of any bird on Earth—approximately 100 feathers per square inch."
      ]
    },
    {
      "id": "harpy-eagle",
      "commonName": "Harpy Eagle",
      "scientificName": "Harpia harpyja",
      "emoji": "🦅",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/447085421/large.jpeg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/hawk_screech.ogg",
      "biome": "rainforest",
      "biomeName": "Tropical Rainforest",
      "class": "Aves",
      "order": "Accipitriformes",
      "family": "Accipitridae",
      "diet": "Carnivore",
      "iucn": "VU",
      "iucnTitle": "Vulnerable",
      "topSpeedKmh": 80,
      "weightKg": 9,
      "lifespanYears": 30,
      "lengthM": "1.0 m (wingspan 2.0 m)",
      "gestation": "56 days (incubation)",
      "nativeRange": "Neotropical rainforests from Mexico to Northern Argentina",
      "socialStructure": "Lifelong monogamous breeding pairs rearing one chick every 2–3 years",
      "ecologicalRole": "Top canopy predator regulating populations of sloths and monkeys",
      "soundType": "falcon-screech",
      "soundName": "Piercing Neotropical Canopy Cry",
      "shortBio": "The most powerful raptor in the Americas, armed with rear talons larger than the claws of a grizzly bear, capable of plucking 6-kg sloths directly from canopy branches.",
      "funFacts": [
        "A harpy eagle’s rear talons can measure up to 13 cm (5 inches) long—longer than those of a grizzly bear.",
        "Their talons can apply over 530 psi of crushing pressure, instantly fracturing the bones of their prey.",
        "They fly through dense rainforest canopies with incredible maneuverability using wide, short wings and a long steering tail."
      ]
    },
    {
      "id": "great-horned-owl",
      "commonName": "Great Horned Owl",
      "scientificName": "Bubo virginianus",
      "emoji": "🦉",
      "imageUrl": "https://images.unsplash.com/photo-1590547290164-2e3359e18ac4?auto=format&fit=crop&w=800&q=80",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/bird_whistle.ogg",
      "biome": "forest",
      "biomeName": "Temperate Forest",
      "class": "Aves",
      "order": "Strigiformes",
      "family": "Strigidae",
      "diet": "Carnivore",
      "iucn": "LC",
      "iucnTitle": "Least Concern",
      "topSpeedKmh": 65,
      "weightKg": 1.5,
      "lifespanYears": 28,
      "lengthM": "0.6 m (wingspan 1.4 m)",
      "gestation": "35 days (incubation)",
      "nativeRange": "Throughout North and South America",
      "socialStructure": "Monogamous solitary breeding pairs defending large forest territories",
      "ecologicalRole": "Apex nocturnal avian predator keeping rodent and skunk populations in balance",
      "soundType": "chirp",
      "soundName": "Deep Resonant Nocturnal Hoot",
      "shortBio": "Revered as the \"Tiger of the Air,\" this apex nocturnal raptor hunts in near-total darkness using silent serrated wing feathers and acute stereoscopic hearing.",
      "funFacts": [
        "Great horned owls have velvety, comb-like fringes on their flight feathers that break up turbulence, allowing 100% silent flight.",
        "Their crushing talon grip requires over 300 pounds per square inch of force, comparable to the bite of a large dog.",
        "Unlike most predators, owls have no sense of smell and regularly prey upon skunks without hesitation."
      ]
    },
    {
      "id": "greater-flamingo",
      "commonName": "Greater Flamingo",
      "scientificName": "Phoenicopterus roseus",
      "emoji": "🦩",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/187242272/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/bird_whistle.ogg",
      "biome": "savannah",
      "biomeName": "Savannah & Grasslands",
      "class": "Aves",
      "order": "Phoenicopteriformes",
      "family": "Phoenicopteridae",
      "diet": "Omnivore",
      "iucn": "LC",
      "iucnTitle": "Least Concern",
      "topSpeedKmh": 60,
      "weightKg": 3.5,
      "lifespanYears": 40,
      "lengthM": "1.4 m (height)",
      "gestation": "30 days (incubation)",
      "nativeRange": "Saline lagoons and salt flats of Africa, Southern Europe, and South Asia",
      "socialStructure": "Colossal breeding flocks numbering up to tens of thousands of birds",
      "ecologicalRole": "Benthic filter-feeder cycling brine shrimp and microscopic algae in alkaline lakes",
      "soundType": "chirp",
      "soundName": "Wetland Flocking Honk",
      "shortBio": "An elegant wading bird instantly recognizable by its vivid coral plumage, feeding upside down in hyper-saline lakes using specialized filter-feeding beaks.",
      "funFacts": [
        "Flamingos are not born pink; their vibrant color comes from beta-carotene pigments in their diet of brine shrimp and red algae.",
        "They feed with their heads positioned completely upside down, using their pump-action tongues to filter mud and water.",
        "Flamingos can comfortably stand on one leg for hours while resting, locking their leg joints to minimize heat loss and muscular strain."
      ]
    },
    {
      "id": "keel-billed-toucan",
      "commonName": "Keel-billed Toucan",
      "scientificName": "Ramphastos sulfuratus",
      "emoji": "🦜",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/2964195/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/bird_whistle.ogg",
      "biome": "rainforest",
      "biomeName": "Tropical Rainforest",
      "class": "Aves",
      "order": "Piciformes",
      "family": "Ramphastidae",
      "diet": "Omnivore",
      "iucn": "NT",
      "iucnTitle": "Near Threatened",
      "topSpeedKmh": 45,
      "weightKg": 0.4,
      "lifespanYears": 20,
      "lengthM": "0.5 m (bill 0.2 m)",
      "gestation": "18 days (incubation)",
      "nativeRange": "Tropical rainforests from Southern Mexico to Northern Colombia",
      "socialStructure": "Small social flocks of 6 to 12 birds roosting in tree cavities",
      "ecologicalRole": "Vital canopy seed disperser propagating diverse tropical rainforest fruit trees",
      "soundType": "chirp",
      "soundName": "Canopy Frog-like Croak",
      "shortBio": "Known as the \"Rainbow Toucan,\" this lively rainforest bird sports a dazzling multi-colored bill that looks heavy but is actually an ultra-light honeycomb of keratin.",
      "funFacts": [
        "A toucan’s massive bill makes up one-third of its entire body length, but is hollow and lightweight like an aerodynamic surfboard.",
        "The large bill acts as a sophisticated biological radiator, dilating blood vessels to dump excess body heat in hot tropical canopies.",
        "Toucans sleep by tucking their colossal bills under their wings and folding their tails forward to fit snugly into hollow tree trunks."
      ]
    },
    {
      "id": "common-ostrich",
      "commonName": "Common Ostrich",
      "scientificName": "Struthio camelus",
      "emoji": "🪶",
      "imageUrl": "https://static.inaturalist.org/photos/2568822/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/alligator_bellow.ogg",
      "biome": "savannah",
      "biomeName": "Savannah & Grasslands",
      "class": "Aves",
      "order": "Struthioniformes",
      "family": "Struthionidae",
      "diet": "Herbivore",
      "iucn": "LC",
      "iucnTitle": "Least Concern",
      "topSpeedKmh": 70,
      "weightKg": 130,
      "lifespanYears": 45,
      "lengthM": "2.7 m (height)",
      "gestation": "42 days (incubation)",
      "nativeRange": "Savannahs and semi-arid plains of Sub-Saharan Africa",
      "socialStructure": "Herds of 5 to 50 led by a dominant territorial rooster",
      "ecologicalRole": "Savannah grazer and seed disperser with incredible visual predator surveillance",
      "soundType": "rattle",
      "soundName": "Deep Resonant Savannah Boom",
      "shortBio": "The largest and heaviest bird on planet Earth, capable of outrunning racehorses at sustained speeds of 70 km/h (43 mph) and delivering kicks that can deter lions.",
      "funFacts": [
        "An ostrich’s eyes are 5 cm in diameter—larger than its entire brain and the largest of any land vertebrate.",
        "They possess only two toes on each foot (all other birds have three or four), designed like running hooves for speed.",
        "Contrary to myth, ostriches do not bury their heads in sand; they lay their long necks flat against the ground to camouflage from predators."
      ]
    },
    {
      "id": "saltwater-crocodile",
      "commonName": "Saltwater Crocodile",
      "scientificName": "Crocodylus porosus",
      "emoji": "🐊",
      "imageUrl": "https://static.inaturalist.org/photos/304988087/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/alligator_bellow.ogg",
      "biome": "ocean",
      "biomeName": "Ocean & Marine",
      "class": "Reptilia",
      "order": "Crocodilia",
      "family": "Crocodylidae",
      "diet": "Carnivore",
      "iucn": "LC",
      "iucnTitle": "Least Concern",
      "topSpeedKmh": 29,
      "weightKg": 1000,
      "lifespanYears": 70,
      "lengthM": "6.0 m",
      "gestation": "80 days (egg incubation)",
      "nativeRange": "Indo-Pacific, Southeast Asia, Northern Australia",
      "socialStructure": "Solitary, hyper-territorial river and estuarine rulers",
      "ecologicalRole": "Estuarine apex predator regulating fish, sharks, and terrestrial mammal populations",
      "soundType": "rattle",
      "soundName": "Deep Sub-Harmonic Water Bellow",
      "shortBio": "The largest living reptile on Earth, surviving virtually unchanged since the age of dinosaurs and possessing the highest measured bite force in the animal kingdom.",
      "funFacts": [
        "A saltwater crocodile can exert a bone-crushing bite force of over 3,700 pounds per square inch (16,460 Newtons).",
        "Special lingual salt glands on their tongue excrete excess salt, allowing them to traverse hundreds of kilometers of open ocean.",
        "The sex of crocodile hatchlings is determined entirely by nest temperature: 31.6°C produces males; warmer or cooler produces females."
      ]
    },
    {
      "id": "komodo-dragon",
      "commonName": "Komodo Dragon",
      "scientificName": "Varanus komodoensis",
      "emoji": "🦎",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/1892238/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/alligator_hiss.ogg",
      "biome": "savannah",
      "biomeName": "Savannah & Grasslands",
      "class": "Reptilia",
      "order": "Squamata",
      "family": "Varanidae",
      "diet": "Carnivore",
      "iucn": "EN",
      "iucnTitle": "Endangered",
      "topSpeedKmh": 20,
      "weightKg": 85,
      "lifespanYears": 30,
      "lengthM": "3.0 m",
      "gestation": "240 days (egg incubation)",
      "nativeRange": "Indonesian islands of Komodo, Rinca, Flores, and Gili Motang",
      "socialStructure": "Solitary scavengers and ambush predators",
      "ecologicalRole": "Apex terrestrial reptile of Indonesian volcanic islands",
      "soundType": "rattle",
      "soundName": "Guttural Threat Hiss",
      "shortBio": "The largest living lizard on Earth, possessing shark-like serrated teeth, anticoagulant venom glands, and an acute olfactory Jacobson’s organ.",
      "funFacts": [
        "A Komodo dragon can eat up to 80% of its own body weight in a single sitting.",
        "Their yellow forked tongue samples airborne scent particles, detecting carrion over 9 kilometers (5.5 miles) away.",
        "Female Komodo dragons are capable of virgin birth (parthenogenesis) when no male mates are present."
      ]
    },
    {
      "id": "leatherback-sea-turtle",
      "commonName": "Leatherback Sea Turtle",
      "scientificName": "Dermochelys coriacea",
      "emoji": "🐢",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/244918310/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/water/subsea_bubble.ogg",
      "biome": "ocean",
      "biomeName": "Ocean & Marine",
      "class": "Reptilia",
      "order": "Testudines",
      "family": "Dermochelyidae",
      "diet": "Carnivore",
      "iucn": "VU",
      "iucnTitle": "Vulnerable",
      "topSpeedKmh": 35,
      "weightKg": 500,
      "lifespanYears": 80,
      "lengthM": "2.1 m",
      "gestation": "60 days (egg incubation)",
      "nativeRange": "Global tropical, temperate, and sub-polar oceanic pelagic waters",
      "socialStructure": "Solitary ocean navigator; returns to natal beaches to nest",
      "ecologicalRole": "Crucial biological controller of global jellyfish blooms",
      "soundType": "whale-song",
      "soundName": "Deep Pelagic Water Exhale",
      "shortBio": "The largest living turtle on Earth, distinct from all others by lacking a bony carapace, instead sporting a flexible, leathery, hydrodynamically ridged skin.",
      "funFacts": [
        "Leatherbacks undertake trans-oceanic migrations of over 19,000 kilometers (12,000 miles) across entire ocean basins.",
        "Their esophagus is lined with backward-pointing spikes (papillae) that prevent slippery jellyfish from escaping while expelling salt water.",
        "They can dive to extraordinary depths of 1,280 meters (4,200 feet)—deeper than any other reptile on planet Earth."
      ]
    },
    {
      "id": "veiled-chameleon",
      "commonName": "Veiled Chameleon",
      "scientificName": "Chamaeleo calyptratus",
      "emoji": "🦎",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/473857256/large.jpeg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/alligator_hiss.ogg",
      "biome": "rainforest",
      "biomeName": "Tropical Rainforest",
      "class": "Reptilia",
      "order": "Squamata",
      "family": "Chamaeleonidae",
      "diet": "Carnivore",
      "iucn": "LC",
      "iucnTitle": "Least Concern",
      "topSpeedKmh": 5,
      "weightKg": 0.15,
      "lifespanYears": 8,
      "lengthM": "0.45 m",
      "gestation": "180 days (egg incubation)",
      "nativeRange": "Mountainous plateau and coastal scrub of Yemen and Saudi Arabia",
      "socialStructure": "Solitary, strictly territorial arboreal branch dwellers",
      "ecologicalRole": "Arboreal insect predator controlling locusts, flies, and caterpillars",
      "soundType": "rattle",
      "soundName": "Territorial Threat Hiss",
      "shortBio": "A master of camouflage and precision hunting, equipped with independently mobile 360-degree eyes, fused pincers, and a ballistic tongue twice its body length.",
      "funFacts": [
        "Chameleons change color primarily for social communication and temperature regulation, rather than matching physical background textures.",
        "Their tongue accelerates from 0 to 97 km/h in 1/100th of a second, firing out to strike insects at twice their total body length.",
        "Their stereoscopic eyes can swivel and focus on two completely different objects simultaneously in 360-degree independent arcs."
      ]
    },
    {
      "id": "king-cobra",
      "commonName": "Northern King Cobra",
      "scientificName": "Ophiophagus hannah",
      "emoji": "🐍",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/307874083/large.jpeg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/alligator_hiss.ogg",
      "biome": "rainforest",
      "biomeName": "Tropical Rainforest",
      "class": "Reptilia",
      "order": "Squamata",
      "family": "Elapidae",
      "diet": "Carnivore",
      "iucn": "VU",
      "iucnTitle": "Vulnerable",
      "topSpeedKmh": 19,
      "weightKg": 7,
      "lifespanYears": 20,
      "lengthM": "5.5 m",
      "gestation": "70 days (nest building)",
      "nativeRange": "Dense rainforests and agricultural fringes of South and Southeast Asia",
      "socialStructure": "Solitary; only snake species known to construct an above-ground nest for eggs",
      "ecologicalRole": "Top reptilian predator regulating populations of other venomous snakes and vipers",
      "soundType": "rattle",
      "soundName": "Low-Frequency Resonant Growl Hiss",
      "shortBio": "The longest venomous snake in the world, capable of rearing one-third of its body off the ground to look an adult human in the eye while spreading a fearsome hood.",
      "funFacts": [
        "The scientific genus name *Ophiophagus* literally translates to \"snake-eater,\" reflecting its diet of hunting other snakes.",
        "A single bite from a king cobra delivers enough neurotoxin to kill an adult Asian elephant within three hours.",
        "Female king cobras are the only snakes on Earth that build architectural leaf nests and guard their clutch until hatching."
      ]
    },
    {
      "id": "axolotl",
      "commonName": "Mexican Axolotl",
      "scientificName": "Ambystoma mexicanum",
      "emoji": "🦎",
      "imageUrl": "https://static.inaturalist.org/photos/20209480/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/water/water_splash.ogg",
      "biome": "mountain",
      "biomeName": "Mountain & Alpine",
      "class": "Amphibia",
      "order": "Urodela",
      "family": "Ambystomatidae",
      "diet": "Carnivore",
      "iucn": "CR",
      "iucnTitle": "Critically Endangered",
      "topSpeedKmh": 15,
      "weightKg": 0.25,
      "lifespanYears": 15,
      "lengthM": "0.25 m",
      "gestation": "14 days",
      "nativeRange": "Highland Lake Xochimilco canal complex near Mexico City",
      "socialStructure": "Solitary, benthic fresh-water dweller",
      "ecologicalRole": "Top wetland salamander predator consuming worms, insects, and small fish",
      "soundType": "frog-chirp",
      "soundName": "Subaquatic Gill Bubble Pop",
      "shortBio": "A biological wonder known as the \"Water Monster,\" the axolotl exhibits neoteny (retaining juvenile gills for its entire life) and can regenerate complete limbs, spinal cord, and heart tissue.",
      "funFacts": [
        "Axolotls can regrow entire lost limbs, digits, jaws, portions of their heart, and even sections of their brain with zero scar tissue.",
        "Unlike other salamanders, they retain external feathery gills throughout their whole lives without undergoing full terrestrial metamorphosis.",
        "They are over 1,000 times more resistant to developing cancer than human beings."
      ]
    },
    {
      "id": "red-eyed-tree-frog",
      "commonName": "Red-eyed Tree Frog",
      "scientificName": "Agalychnis callidryas",
      "emoji": "🐸",
      "imageUrl": "https://static.inaturalist.org/photos/173688685/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/frog_croak.ogg",
      "biome": "rainforest",
      "biomeName": "Tropical Rainforest",
      "class": "Amphibia",
      "order": "Anura",
      "family": "Hylidae",
      "diet": "Carnivore",
      "iucn": "LC",
      "iucnTitle": "Least Concern",
      "topSpeedKmh": 6,
      "weightKg": 0.015,
      "lifespanYears": 5,
      "lengthM": "0.07 m",
      "gestation": "7 days (egg hatching)",
      "nativeRange": "Neotropical rainforest lowlands from Southern Mexico to Northern Colombia",
      "socialStructure": "Solitary, nocturnal arboreal foliage canopy dwellers",
      "ecologicalRole": "Vital mid-trophic insect predator controlling moths, crickets, and flies",
      "soundType": "frog-chirp",
      "soundName": "Rainforest Clack & Quank Chirp",
      "shortBio": "The quintessential ambassador of tropical rainforests, possessing vivid scarlet eyes and blue-and-yellow flank stripes used for \"startle coloration\" against predators.",
      "funFacts": [
        "When startled by a snake, the frog suddenly flashes its enormous red eyes and bright blue-orange flanks, giving it a split second to leap to safety.",
        "Suction-cup pads on their toes secrete special watery mucous that capillary-grips slippery tropical leaves even upside down.",
        "Female frogs lay egg clutches on the underside of leaves suspended directly over rainforest ponds so tadpoles drop straight into water upon hatching."
      ]
    },
    {
      "id": "poison-dart-frog",
      "commonName": "Yellow-banded Poison Frog",
      "scientificName": "Dendrobates leucomelas",
      "emoji": "🐸",
      "imageUrl": "https://images.unsplash.com/photo-1695768231989-6e5acbe201ac?auto=format&fit=crop&w=800&q=80",
      "audioUrl": "https://actions.google.com/sounds/v1/animals/frog_croak.ogg",
      "biome": "rainforest",
      "biomeName": "Tropical Rainforest",
      "class": "Amphibia",
      "order": "Anura",
      "family": "Dendrobatidae",
      "diet": "Carnivore",
      "iucn": "LC",
      "iucnTitle": "Least Concern",
      "topSpeedKmh": 5,
      "weightKg": 0.003,
      "lifespanYears": 10,
      "lengthM": "0.04 m",
      "gestation": "14 days (egg metamorphosis)",
      "nativeRange": "Amazon basin (Venezuela, Colombia, Guyana, Brazil)",
      "socialStructure": "Solitary territorial males calling from bromeliads",
      "ecologicalRole": "Regulates micro-arthropod populations in rainforest leaf litter",
      "soundType": "frog-chirp",
      "soundName": "Rainforest Amphibian Trill",
      "shortBio": "A dazzlingly bright jewel of the Amazon, utilizing aposematic warning coloration to alert rainforest predators of its potent alkaloid skin toxins.",
      "funFacts": [
        "In the wild, poison frogs synthesize their lethal skin toxins entirely from their diet of venomous ants and mites.",
        "When raised in captivity on clean crickets, poison dart frogs become completely non-toxic and harmless.",
        "Devoted frog fathers carry newly hatched tadpoles on their backs high into tree canopies to pool in wet bromeliad leaves."
      ]
    },
    {
      "id": "great-white-shark",
      "commonName": "Great White Shark",
      "scientificName": "Carcharodon carcharias",
      "emoji": "🦈",
      "imageUrl": "https://static.inaturalist.org/photos/177202266/large.jpeg",
      "audioUrl": "https://actions.google.com/sounds/v1/water/underwater_ambience.ogg",
      "biome": "ocean",
      "biomeName": "Ocean & Marine",
      "class": "Chondrichthyes",
      "order": "Lamniformes",
      "family": "Lamnidae",
      "diet": "Carnivore",
      "iucn": "VU",
      "iucnTitle": "Vulnerable",
      "topSpeedKmh": 56,
      "weightKg": 1900,
      "lifespanYears": 70,
      "lengthM": "5.2 m",
      "gestation": "335 days",
      "nativeRange": "Coastal and offshore waters worldwide (12°C to 24°C)",
      "socialStructure": "Solitary, with hierarchical dominance around feeding aggregations",
      "ecologicalRole": "Apex marine predator maintaining healthy marine mammal and fish genetics",
      "soundType": "whale-song",
      "soundName": "Deep Ocean Hydrodynamic Pulse",
      "shortBio": "The ocean’s most iconic apex predator, boasting electro-receptive Lorenzini ampullae that can sense the heartbeat of prey in total darkness.",
      "funFacts": [
        "A great white can detect a single drop of blood dispersed into 100 liters of seawater (nearly 25 gallons).",
        "They possess several rows of serrated teeth, going through as many as 20,000 teeth in a single lifetime.",
        "Unlike most fish, great whites are warm-blooded (endothermic), maintaining core body temperature well above cold water."
      ]
    },
    {
      "id": "manta-ray",
      "commonName": "Giant Oceanic Manta Ray",
      "scientificName": "Mobula birostris",
      "emoji": "🌊",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/33852153/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/water/underwater_ambience.ogg",
      "biome": "ocean",
      "biomeName": "Ocean & Marine",
      "class": "Chondrichthyes",
      "order": "Myliobatiformes",
      "family": "Mobulidae",
      "diet": "Carnivore",
      "iucn": "EN",
      "iucnTitle": "Endangered",
      "topSpeedKmh": 30,
      "weightKg": 2000,
      "lifespanYears": 45,
      "lengthM": "7.0 m (disc width)",
      "gestation": "365 days",
      "nativeRange": "Tropical, subtropical, and temperate oceans worldwide",
      "socialStructure": "Solitary or loose groups aggregating at pelagic cleaning stations",
      "ecologicalRole": "Pelagic filter feeder cycling vast volumes of zooplankton across ocean reefs",
      "soundType": "whale-song",
      "soundName": "Hydrodynamic Ocean Wing Glider",
      "shortBio": "The largest ray in the world, gliding gracefully through open oceans using triangular pectoral wings and boasting the largest brain-to-body ratio of any cold-blooded fish.",
      "funFacts": [
        "Manta rays possess the largest brain of any fish on Earth and demonstrate complex cognitive abilities such as self-awareness in mirror tests.",
        "Unlike stingrays, manta rays have no venomous tail barb and are completely harmless, docile filter-feeders.",
        "They can leap completely out of the ocean into the air in acrobatic breaching displays up to 2 meters high."
      ]
    },
    {
      "id": "clownfish",
      "commonName": "Ocellaris Clownfish",
      "scientificName": "Amphiprion ocellaris",
      "emoji": "🐠",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/9045216/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/water/water_bubbles.ogg",
      "biome": "ocean",
      "biomeName": "Ocean & Marine",
      "class": "Actinopterygii",
      "order": "Perciformes",
      "family": "Pomacentridae",
      "diet": "Omnivore",
      "iucn": "LC",
      "iucnTitle": "Least Concern",
      "topSpeedKmh": 8,
      "weightKg": 0.1,
      "lifespanYears": 10,
      "lengthM": "0.11 m",
      "gestation": "8 days (egg hatching)",
      "nativeRange": "Warm shallow reefs of the Indo-Pacific from Australia to Japan",
      "socialStructure": "Hierarchical family groups living in a single host sea anemone",
      "ecologicalRole": "Mutualistic symbiont defending host sea anemones from parasite butterflies",
      "soundType": "frog-chirp",
      "soundName": "Subaquatic Jaw Click & Pop",
      "shortBio": "The famous brightly striped orange reef fish that shares a legendary mutualistic partnership with venomous sea anemones, coated in protective immune mucus.",
      "funFacts": [
        "Clownfish are immune to the lethal stinging tentacles of sea anemones thanks to a specialized mucous coating that mimics anemone chemistry.",
        "All clownfish are born male; the largest and most dominant fish in a group undergoes a sequential sex change to become the breeding female.",
        "They communicate with each other underwater by snapping their jaws together to create distinct clicking and popping sounds."
      ]
    },
    {
      "id": "giant-pacific-octopus",
      "commonName": "Giant Pacific Octopus",
      "scientificName": "Enteroctopus dofleini",
      "emoji": "🐙",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/174792488/large.jpg",
      "audioUrl": "https://actions.google.com/sounds/v1/water/water_bubbles.ogg",
      "biome": "ocean",
      "biomeName": "Ocean & Marine",
      "class": "Invertebrata",
      "order": "Octopoda",
      "family": "Enteroctopodidae",
      "diet": "Carnivore",
      "iucn": "LC",
      "iucnTitle": "Least Concern",
      "topSpeedKmh": 40,
      "weightKg": 45,
      "lifespanYears": 4,
      "lengthM": "4.3 m (arm span)",
      "gestation": "180 days (brooding)",
      "nativeRange": "Coastal North Pacific Ocean from California to Japan",
      "socialStructure": "Strictly solitary, inhabiting benthic caves and rocky reefs",
      "ecologicalRole": "Top invertebrate predator cracking crabs, clams, and bottom-dwelling fish",
      "soundType": "dolphin-clicks",
      "soundName": "Subsea Hydrodynamic Jet Pulse",
      "shortBio": "A master of camouflage, problem-solving, and tactile manipulation, with three hearts, blue hemocyanin blood, and two-thirds of its neurons located in its arms.",
      "funFacts": [
        "An octopus has three working hearts: two pump blood to the gills, while the third circulates blood to the rest of the body.",
        "They can squeeze their entire body through any opening larger than their hard keratin beak (about the size of a coin).",
        "Thousands of suction cups can taste and smell objects touched, providing full tactile and chemical awareness."
      ]
    },
    {
      "id": "monarch-butterfly",
      "commonName": "Monarch Butterfly",
      "scientificName": "Danaus plexippus",
      "emoji": "🦋",
      "imageUrl": "https://inaturalist-open-data.s3.amazonaws.com/photos/227923335/large.jpeg",
      "audioUrl": "https://actions.google.com/sounds/v1/water/water_bubbles.ogg",
      "biome": "forest",
      "biomeName": "Temperate Forest",
      "class": "Invertebrata",
      "order": "Lepidoptera",
      "family": "Nymphalidae",
      "diet": "Herbivore",
      "iucn": "EN",
      "iucnTitle": "Endangered",
      "topSpeedKmh": 20,
      "weightKg": 0.0005,
      "lifespanYears": 0.75,
      "lengthM": "0.1 m (wingspan)",
      "gestation": "14 days (chrysalis)",
      "nativeRange": "North America, introduced across Pacific islands and Australia",
      "socialStructure": "Massive seasonal clusters roosting together on fir trees",
      "ecologicalRole": "Essential planetary flower pollinator and iconic biological migratory sentinel",
      "soundType": "frog-chirp",
      "soundName": "Micro-Acoustic Wing Flutter",
      "shortBio": "Renowned worldwide for an epic trans-continental multi-generational migration of up to 4,800 km (3,000 miles) navigating via celestial magnetic orientation.",
      "funFacts": [
        "Monarchs complete a four-generation relay migration where the \"super-generation\" can live up to eight months—eight times longer than regular summer monarchs.",
        "Caterpillars eat toxic milkweed, storing cardiac glycosides in their wings that make them poisonous and foul-tasting to birds.",
        "Their bright orange and black wings serve as iconic aposematic warning banners to predators across North America."
      ]
    }
  ];

  // Benchmark Maxima for Comparator Bar Scales
  const BENCHMARKS = {
    speedKmh: 400, // Peregrine Falcon stoop ~389 km/h
    weightKg: 150000, // Blue whale ~150,000 kg
    lifespanYears: 100 // Maximum reference
  };

  // State Management
  let activeBiome = 'all';
  let activeClass = 'all';
  let activeIucn = 'all';
  let activeDiet = 'all';
  let activeSort = 'name-asc';
  let activeSearch = '';
  let activeUnitSystem = 'metric'; // 'metric' or 'imperial'
  let comparedSpeciesIds = [];
  let currentAudioContext = null;

  // Active Audio Tracking (Natural field recording engine)
  let activeAudioPlayer = null;
  let activePlayingSpeciesId = null;

  // DOM Elements Cache
  const speciesGrid = document.getElementById('speciesGrid');
  const speciesSearchInput = document.getElementById('speciesSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const biomeChipsGroup = document.getElementById('biomeChipsGroup');
  const classFilterSelect = document.getElementById('classFilterSelect');
  const iucnFilterSelect = document.getElementById('iucnFilterSelect');
  const dietFilterSelect = document.getElementById('dietFilterSelect');
  const sortFilterSelect = document.getElementById('sortFilterSelect');
  const displayedCount = document.getElementById('displayedCount');
  const totalSpeciesCount = document.getElementById('totalSpeciesCount');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  const resetFiltersAltBtn = document.getElementById('resetFiltersAltBtn');
  const noResultsState = document.getElementById('noResultsState');
  const unitMetricBtn = document.getElementById('unitMetricBtn');
  const unitImperialBtn = document.getElementById('unitImperialBtn');

  // Mode View Elements
  const modeTabBtns = document.querySelectorAll('.mode-tab-btn[data-view]');
  const appViews = document.querySelectorAll('.app-view');
  const randomSpeciesBtn = document.getElementById('randomSpeciesBtn');

  // Comparator Elements
  const compareCountBadge = document.getElementById('compareCountBadge');
  const compareDock = document.getElementById('compareDock');
  const dockCount = document.getElementById('dockCount');
  const dockAvatars = document.getElementById('dockAvatars');
  const dockLaunchCompareBtn = document.getElementById('dockLaunchCompareBtn');
  const dockClearBtn = document.getElementById('dockClearBtn');
  const clearAllCompareBtn = document.getElementById('clearAllCompareBtn');
  const compareSlot1 = document.getElementById('compareSlot1');
  const compareSlot2 = document.getElementById('compareSlot2');
  const compareSlot3 = document.getElementById('compareSlot3');
  const comparisonDisplayArea = document.getElementById('comparisonDisplayArea');

  // Modal Elements
  const speciesModalBackdrop = document.getElementById('speciesModalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalContentBody = document.getElementById('modalContentBody');

  // Soundboard Elements
  const soundboardGrid = document.getElementById('soundboardGrid');

  // Toast Container
  const toastContainer = document.getElementById('toastContainer');

  // ==========================================================================
  // INITIALIZATION & EVENT WIRING
  // ==========================================================================
  function init() {
    if (totalSpeciesCount) totalSpeciesCount.textContent = SPECIES_DATA.length;
    const statCountEl = document.getElementById('statSpeciesCount');
    if (statCountEl) statCountEl.textContent = SPECIES_DATA.length;
    renderGallery();
    renderSoundboard();
    populateCompareDropdowns();
    initQuiz();
    setupEventListeners();
  }

  function setupEventListeners() {
    // Mode Switcher Tabs
    modeTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetView = btn.getAttribute('data-view');
        switchView(targetView);
      });
    });

    // Random Mystery Species Button
    randomSpeciesBtn?.addEventListener('click', () => {
      const randomIndex = Math.floor(Math.random() * SPECIES_DATA.length);
      const chosen = SPECIES_DATA[randomIndex];
      openSpeciesModal(chosen.id);
    });

    // Search Input
    speciesSearchInput?.addEventListener('input', (e) => {
      activeSearch = e.target.value.toLowerCase().trim();
      if (clearSearchBtn) {
        clearSearchBtn.classList.toggle('active', Boolean(activeSearch));
      }
      renderGallery();
    });

    clearSearchBtn?.addEventListener('click', () => {
      if (speciesSearchInput) speciesSearchInput.value = '';
      activeSearch = '';
      clearSearchBtn.classList.remove('active');
      renderGallery();
    });

    // Biome Chips
    biomeChipsGroup?.addEventListener('click', (e) => {
      const chip = e.target.closest('.biome-chip');
      if (!chip) return;
      document.querySelectorAll('.biome-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeBiome = chip.getAttribute('data-biome') || 'all';
      renderGallery();
    });

    // Dropdown Filters
    classFilterSelect?.addEventListener('change', (e) => {
      activeClass = e.target.value;
      renderGallery();
    });

    iucnFilterSelect?.addEventListener('change', (e) => {
      activeIucn = e.target.value;
      renderGallery();
    });

    dietFilterSelect?.addEventListener('change', (e) => {
      activeDiet = e.target.value;
      renderGallery();
    });

    sortFilterSelect?.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderGallery();
    });

    // Reset Filters Buttons
    const handleReset = () => {
      activeBiome = 'all';
      activeClass = 'all';
      activeIucn = 'all';
      activeDiet = 'all';
      activeSort = 'name-asc';
      activeSearch = '';
      if (speciesSearchInput) speciesSearchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.classList.remove('active');
      document.querySelectorAll('.biome-chip').forEach(c => c.classList.remove('active'));
      document.querySelector('.biome-chip[data-biome="all"]')?.classList.add('active');
      if (classFilterSelect) classFilterSelect.value = 'all';
      if (iucnFilterSelect) iucnFilterSelect.value = 'all';
      if (dietFilterSelect) dietFilterSelect.value = 'all';
      if (sortFilterSelect) sortFilterSelect.value = 'name-asc';
      renderGallery();
    };

    resetFiltersBtn?.addEventListener('click', handleReset);
    resetFiltersAltBtn?.addEventListener('click', handleReset);

    // Unit Toggles
    unitMetricBtn?.addEventListener('click', () => {
      activeUnitSystem = 'metric';
      unitMetricBtn.classList.add('active');
      unitImperialBtn?.classList.remove('active');
      renderGallery();
      renderComparison();
    });

    unitImperialBtn?.addEventListener('click', () => {
      activeUnitSystem = 'imperial';
      unitImperialBtn.classList.add('active');
      unitMetricBtn?.classList.remove('active');
      renderGallery();
      renderComparison();
    });

    // Modal Close
    modalCloseBtn?.addEventListener('click', closeSpeciesModal);
    speciesModalBackdrop?.addEventListener('click', (e) => {
      if (e.target === speciesModalBackdrop) closeSpeciesModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && speciesModalBackdrop?.classList.contains('open')) {
        closeSpeciesModal();
      }
    });

    // Comparator Dock Events
    dockLaunchCompareBtn?.addEventListener('click', () => {
      switchView('compare');
    });

    dockClearBtn?.addEventListener('click', clearAllCompared);
    clearAllCompareBtn?.addEventListener('click', clearAllCompared);

    // Comparator Pickers
    [compareSlot1, compareSlot2, compareSlot3].forEach((slot, index) => {
      slot?.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val) {
          comparedSpeciesIds[index] = val;
        } else {
          comparedSpeciesIds.splice(index, 1);
        }
        updateCompareDock();
        renderComparison();
      });
    });

    // Biome links in footer
    document.querySelectorAll('[data-jump-biome]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const biome = link.getAttribute('data-jump-biome');
        switchView('gallery');
        const targetChip = document.querySelector(`.biome-chip[data-biome="${biome}"]`);
        if (targetChip) targetChip.click();
        window.scrollTo({ top: 350, behavior: 'smooth' });
      });
    });
  }

  function switchView(targetView) {
    modeTabBtns.forEach(b => {
      b.classList.toggle('active', b.getAttribute('data-view') === targetView);
    });

    appViews.forEach(v => {
      v.classList.add('hidden');
      v.classList.remove('active');
    });

    const activeViewEl = document.getElementById(`view-${targetView}`);
    if (activeViewEl) {
      activeViewEl.classList.remove('hidden');
      activeViewEl.classList.add('active');
    }

    if (targetView === 'compare') {
      renderComparison();
    }
  }

  // ==========================================================================
  // VIEW 1: SPECIES GALLERY RENDERING (Photorealistic Cards)
  // ==========================================================================
  function filterAndSortSpecies() {
    let list = [...SPECIES_DATA];

    if (activeBiome !== 'all') {
      list = list.filter(s => s.biome === activeBiome);
    }
    if (activeClass !== 'all') {
      list = list.filter(s => s.class === activeClass);
    }
    if (activeIucn !== 'all') {
      list = list.filter(s => s.iucn === activeIucn);
    }
    if (activeDiet !== 'all') {
      list = list.filter(s => s.diet === activeDiet);
    }

    if (activeSearch) {
      list = list.filter(s => {
        const textToSearch = [
          s.commonName,
          s.scientificName,
          s.biomeName,
          s.class,
          s.family,
          s.diet,
          s.ecologicalRole,
          s.shortBio,
          s.nativeRange,
          ...s.funFacts
        ].join(' ').toLowerCase();
        return textToSearch.includes(activeSearch);
      });
    }

    list.sort((a, b) => {
      switch (activeSort) {
        case 'name-asc':
          return a.commonName.localeCompare(b.commonName);
        case 'name-desc':
          return b.commonName.localeCompare(a.commonName);
        case 'speed-desc':
          return b.topSpeedKmh - a.topSpeedKmh;
        case 'weight-desc':
          return b.weightKg - a.weightKg;
        case 'lifespan-desc':
          return b.lifespanYears - a.lifespanYears;
        case 'threat-desc': {
          const rank = { 'CR': 5, 'EN': 4, 'VU': 3, 'NT': 2, 'LC': 1 };
          return (rank[b.iucn] || 0) - (rank[a.iucn] || 0);
        }
        default:
          return 0;
      }
    });

    return list;
  }

  function formatSpeed(kmh) {
    if (activeUnitSystem === 'imperial') {
      const mph = Math.round(kmh * 0.621371);
      return `${mph} mph`;
    }
    return `${kmh} km/h`;
  }

  function formatWeight(kg) {
    if (activeUnitSystem === 'imperial') {
      const lbs = Math.round(kg * 2.20462);
      if (lbs >= 2000) {
        const tons = (lbs / 2000).toFixed(1);
        return `${tons} tons`;
      }
      return `${lbs.toLocaleString()} lbs`;
    }
    if (kg >= 1000) {
      const tons = (kg / 1000).toFixed(1);
      return `${tons} tonnes`;
    }
    return `${kg.toLocaleString()} kg`;
  }

  function renderGallery() {
    if (!speciesGrid) return;
    const filtered = filterAndSortSpecies();

    if (displayedCount) displayedCount.textContent = filtered.length;

    if (filtered.length === 0) {
      speciesGrid.innerHTML = '';
      if (noResultsState) noResultsState.classList.remove('hidden');
      return;
    }

    if (noResultsState) noResultsState.classList.add('hidden');

    speciesGrid.innerHTML = filtered.map(animal => {
      const isPinned = comparedSpeciesIds.includes(animal.id);
      const isPlaying = activePlayingSpeciesId === animal.id;
      const iucnClass = `iucn-${animal.iucn.toLowerCase()}`;

      return `
        <article class="species-card" data-species-id="${animal.id}">
          <div class="card-media-banner">
            <img 
              src="${animal.imageUrl}" 
              alt="${animal.commonName} (${animal.scientificName})" 
              class="card-photo-img" 
              loading="lazy" 
              onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
            >
            <div class="card-fallback-avatar" style="display: none;">${animal.emoji}</div>
            <div class="card-photo-scrim"></div>
            <span class="card-iucn-badge ${iucnClass}" title="IUCN Red List: ${animal.iucnTitle}">${animal.iucn}</span>
            <span class="card-biome-tag">${animal.biomeName}</span>
          </div>

          <div class="card-body">
            <div class="card-header-info">
              <h3 class="species-title">${animal.commonName}</h3>
              <p class="species-binomial">${animal.scientificName}</p>
            </div>

            <div class="species-quick-stats">
              <div class="stat-item">
                <span class="stat-item-lbl">Top Speed</span>
                <span class="stat-item-val">${formatSpeed(animal.topSpeedKmh)}</span>
              </div>
              <div class="stat-item">
                <span class="stat-item-lbl">Weight</span>
                <span class="stat-item-val">${formatWeight(animal.weightKg)}</span>
              </div>
              <div class="stat-item">
                <span class="stat-item-lbl">Lifespan</span>
                <span class="stat-item-val">${animal.lifespanYears} yrs</span>
              </div>
            </div>

            <p class="species-snippet">${animal.shortBio}</p>

            <div class="card-actions-row">
              <button type="button" class="btn-card-dossier" data-action="dossier" data-id="${animal.id}">
                View Dossier →
              </button>
              <button 
                type="button" 
                class="btn-card-audio ${isPlaying ? 'playing' : ''}" 
                data-action="audio" 
                data-id="${animal.id}" 
                title="${isPlaying ? 'Pause animal call' : 'Play authentic vocalization'}"
              >
                ${isPlaying ? '⏸' : '🔊'}
              </button>
              <button 
                type="button" 
                class="btn-card-compare ${isPinned ? 'pinned' : ''}" 
                data-action="compare" 
                data-id="${animal.id}" 
                title="${isPinned ? 'Remove from comparison' : 'Add to comparison'}"
              >
                ⚖️
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Bind card action buttons
    speciesGrid.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const action = btn.getAttribute('data-action');
        const id = btn.getAttribute('data-id');

        if (action === 'dossier') {
          openSpeciesModal(id);
        } else if (action === 'audio') {
          playAnimalSound(id);
        } else if (action === 'compare') {
          toggleCompareSpecies(id);
        }
      });
    });

    // Clicking the card body also opens dossier
    speciesGrid.querySelectorAll('.species-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('button')) {
          const id = card.getAttribute('data-species-id');
          if (id) openSpeciesModal(id);
        }
      });
    });
  }

  // ==========================================================================
  // VIEW 2: SPECIES COMPARATOR (Photo Thumbnails)
  // ==========================================================================
  function toggleCompareSpecies(id) {
    const idx = comparedSpeciesIds.indexOf(id);
    if (idx > -1) {
      comparedSpeciesIds.splice(idx, 1);
      showToast('Removed from comparison');
    } else {
      if (comparedSpeciesIds.length >= 3) {
        showToast('Max 3 species in comparison. Please remove one first.');
        return;
      }
      comparedSpeciesIds.push(id);
      showToast('Added to comparison matrix');
    }

    updateCompareDock();
    renderGallery();
    renderComparison();
  }

  function clearAllCompared() {
    comparedSpeciesIds = [];
    updateCompareDock();
    renderGallery();
    renderComparison();
    showToast('Comparison cleared');
  }

  function updateCompareDock() {
    const count = comparedSpeciesIds.length;
    if (compareCountBadge) compareCountBadge.textContent = count;
    if (dockCount) dockCount.textContent = count;

    if (compareDock) {
      compareDock.classList.toggle('hidden', count === 0);
    }

    if (dockAvatars) {
      dockAvatars.innerHTML = comparedSpeciesIds.map(id => {
        const item = SPECIES_DATA.find(s => s.id === id);
        return `<div class="dock-avatar-pill" title="${item?.commonName}">${item?.emoji || '🐾'}</div>`;
      }).join('');
    }

    if (compareSlot1) compareSlot1.value = comparedSpeciesIds[0] || '';
    if (compareSlot2) compareSlot2.value = comparedSpeciesIds[1] || '';
    if (compareSlot3) compareSlot3.value = comparedSpeciesIds[2] || '';
  }

  function populateCompareDropdowns() {
    const optionsHtml = '<option value="">-- Choose a Species --</option>' + 
      SPECIES_DATA.map(s => `<option value="${s.id}">${s.emoji} ${s.commonName} (${s.scientificName})</option>`).join('');

    if (compareSlot1) compareSlot1.innerHTML = optionsHtml;
    if (compareSlot2) compareSlot2.innerHTML = optionsHtml;
    if (compareSlot3) compareSlot3.innerHTML = optionsHtml;
  }

  function renderComparison() {
    if (!comparisonDisplayArea) return;

    if (comparedSpeciesIds.length === 0) {
      comparisonDisplayArea.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1.5rem; color: var(--text-secondary); background: var(--bg-surface-elevated); border: 1px dashed var(--border-subtle); border-radius: var(--radius-xl); max-width: 650px; margin: 2rem auto;">
          <div style="font-size: 3.5rem; margin-bottom: 1rem;">⚖️</div>
          <h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 0.5rem; color: var(--text-primary);">No Species Selected</h3>
          <p style="margin-bottom: 1.5rem;">Pick species using the dropdown slots above, or click the ⚖️ icon on animal cards in the Wildlife Catalog.</p>
          <button type="button" class="btn btn-primary" onclick="document.querySelector('.mode-tab-btn[data-view=\\'gallery\\']')?.click();">
            Browse Wildlife Catalog →
          </button>
        </div>
      `;
      return;
    }

    const selectedList = comparedSpeciesIds.map(id => SPECIES_DATA.find(s => s.id === id)).filter(Boolean);

    comparisonDisplayArea.innerHTML = selectedList.map(animal => {
      const speedPercent = Math.min(100, Math.round((animal.topSpeedKmh / BENCHMARKS.speedKmh) * 100));
      const weightPercent = Math.min(100, Math.round((Math.log10(animal.weightKg + 1) / Math.log10(BENCHMARKS.weightKg)) * 100));
      const lifespanPercent = Math.min(100, Math.round((animal.lifespanYears / BENCHMARKS.lifespanYears) * 100));
      const isPlaying = activePlayingSpeciesId === animal.id;

      return `
        <article class="compare-animal-card">
          <div class="compare-card-top">
            <div class="compare-avatar">
              <img 
                src="${animal.imageUrl}" 
                alt="${animal.commonName}" 
                class="compare-avatar-img" 
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
              >
              <div style="display: none; font-size: 2.2rem;">${animal.emoji}</div>
            </div>
            <div class="compare-title-block">
              <h3>${animal.commonName}</h3>
              <p>${animal.scientificName}</p>
            </div>
          </div>

          <div class="compare-metrics-list">
            <!-- Speed Bar -->
            <div class="metric-bar-group">
              <div class="metric-bar-header">
                <span class="metric-bar-label">⚡ Top Speed</span>
                <span class="metric-bar-val">${formatSpeed(animal.topSpeedKmh)}</span>
              </div>
              <div class="metric-bar-track">
                <div class="metric-bar-fill fill-speed" style="width: ${speedPercent}%;"></div>
              </div>
            </div>

            <!-- Weight Bar -->
            <div class="metric-bar-group">
              <div class="metric-bar-header">
                <span class="metric-bar-label">⚖️ Adult Weight</span>
                <span class="metric-bar-val">${formatWeight(animal.weightKg)}</span>
              </div>
              <div class="metric-bar-track">
                <div class="metric-bar-fill fill-weight" style="width: ${weightPercent}%;"></div>
              </div>
            </div>

            <!-- Lifespan Bar -->
            <div class="metric-bar-group">
              <div class="metric-bar-header">
                <span class="metric-bar-label">⏳ Average Lifespan</span>
                <span class="metric-bar-val">${animal.lifespanYears} Years</span>
              </div>
              <div class="metric-bar-track">
                <div class="metric-bar-fill fill-lifespan" style="width: ${lifespanPercent}%;"></div>
              </div>
            </div>
          </div>

          <table class="compare-details-table">
            <tbody>
              <tr><td>Biome</td><td>${animal.biomeName}</td></tr>
              <tr><td>Class</td><td>${animal.class}</td></tr>
              <tr><td>Diet</td><td>${animal.diet}</td></tr>
              <tr><td>IUCN Status</td><td><strong>${animal.iucnTitle} (${animal.iucn})</strong></td></tr>
              <tr><td>Body Length</td><td>${animal.lengthM}</td></tr>
              <tr><td>Gestation</td><td>${animal.gestation}</td></tr>
              <tr><td>Social Unit</td><td>${animal.socialStructure}</td></tr>
            </tbody>
          </table>

          <div style="margin-top: 1.25rem; display: flex; gap: 8px;">
            <button type="button" class="btn btn-primary btn-sm" style="flex: 1;" onclick="window.GamilityAnimals.openModal('${animal.id}')">
              Full Dossier
            </button>
            <button 
              type="button" 
              class="btn btn-secondary btn-sm ${isPlaying ? 'playing' : ''}" 
              onclick="window.GamilityAnimals.playSound('${animal.id}')" 
              title="Play vocalization"
            >
              ${isPlaying ? '⏸' : '🔊'}
            </button>
            <button 
              type="button" 
              class="btn btn-secondary btn-sm" 
              onclick="window.GamilityAnimals.toggleCompare('${animal.id}')" 
              title="Remove from slot"
            >
              ✕
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  // ==========================================================================
  // VIEW 3: BIO-ACOUSTIC SOUNDBOARD (Photo Cards & Audio)
  // ==========================================================================
  function renderSoundboard() {
    if (!soundboardGrid) return;

    soundboardGrid.innerHTML = SPECIES_DATA.map(animal => {
      const isPlaying = activePlayingSpeciesId === animal.id;

      return `
        <div class="sound-tile ${isPlaying ? 'playing' : ''}" data-sound-id="${animal.id}">
          <div class="sound-photo-avatar">
            <img 
              src="${animal.imageUrl}" 
              alt="${animal.commonName}" 
              class="sound-photo-img" 
              loading="lazy" 
              onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"
            >
            <span class="sound-icon-hero" style="display: none;">${animal.emoji}</span>
          </div>
          <h4 class="sound-animal-name">${animal.commonName}</h4>
          <span class="sound-call-desc">${animal.soundName}</span>
          <div class="sound-btn-trigger">
            <span>${isPlaying ? '⏸ Pause Call' : '▶ Play Animal Call'}</span>
            ${isPlaying ? '<span class="audio-equalizer"><span class="eq-bar"></span><span class="eq-bar"></span><span class="eq-bar"></span></span>' : ''}
          </div>
        </div>
      `;
    }).join('');

    soundboardGrid.querySelectorAll('.sound-tile').forEach(tile => {
      tile.addEventListener('click', () => {
        const id = tile.getAttribute('data-sound-id');
        if (id) {
          playAnimalSound(id);
        }
      });
    });
  }

  // ==========================================================================
  // DUAL-MODE AUDIO ENGINE: NATURAL AUDIO WITH SYNTHESIZER FALLBACK
  // ==========================================================================
  function playAnimalSound(speciesId) {
    const animal = SPECIES_DATA.find(s => s.id === speciesId);
    if (!animal) return;

    // Toggle pause if user clicks the currently playing animal
    if (activeAudioPlayer && activePlayingSpeciesId === speciesId) {
      activeAudioPlayer.pause();
      activeAudioPlayer = null;
      activePlayingSpeciesId = null;
      syncAudioUI(null);
      showToast(`Audio paused`);
      return;
    }

    // Stop any previously playing animal
    if (activeAudioPlayer) {
      activeAudioPlayer.pause();
      activeAudioPlayer = null;
      activePlayingSpeciesId = null;
    }

    activePlayingSpeciesId = speciesId;
    syncAudioUI(speciesId);
    showToast(`🔊 Playing: ${animal.commonName} (${animal.soundName})`);

    // 1. Primary: Attempt to play authentic natural field recording
    if (animal.audioUrl) {
      const audio = new Audio(animal.audioUrl);
      activeAudioPlayer = audio;

      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          audio.onended = () => {
            if (activeAudioPlayer === audio) {
              activeAudioPlayer = null;
              activePlayingSpeciesId = null;
              syncAudioUI(null);
            }
          };
        }).catch(() => {
          // Fallback to procedural synthesis if blocked/offline
          synthesizeFallbackAudio(animal);
        });
      }
    } else {
      synthesizeFallbackAudio(animal);
    }
  }

  function syncAudioUI(playingId) {
    // 1. Update Card Audio Buttons
    document.querySelectorAll('.btn-card-audio').forEach(btn => {
      const id = btn.getAttribute('data-id');
      if (id === playingId) {
        btn.classList.add('playing');
        btn.innerHTML = `⏸ <span class="audio-equalizer"><span class="eq-bar"></span><span class="eq-bar"></span><span class="eq-bar"></span></span>`;
      } else {
        btn.classList.remove('playing');
        btn.innerHTML = `🔊`;
      }
    });

    // 2. Update Modal Action Button
    const modalBtn = document.getElementById('modalPlayAudioBtn');
    if (modalBtn) {
      if (playingId) {
        modalBtn.innerHTML = `⏸ Pause Animal Call <span class="audio-equalizer"><span class="eq-bar"></span><span class="eq-bar"></span><span class="eq-bar"></span></span>`;
      } else {
        modalBtn.innerHTML = `🔊 Play Animal Call`;
      }
    }

    // 3. Update Soundboard Tiles
    document.querySelectorAll('.sound-tile').forEach(tile => {
      const id = tile.getAttribute('data-sound-id');
      const isThis = id === playingId;
      tile.classList.toggle('playing', isThis);
      const trigger = tile.querySelector('.sound-btn-trigger');
      if (trigger) {
        trigger.innerHTML = isThis
          ? `<span>⏸ Pause Call</span> <span class="audio-equalizer"><span class="eq-bar"></span><span class="eq-bar"></span><span class="eq-bar"></span></span>`
          : `<span>▶ Play Animal Call</span>`;
      }
    });
  }

  // Fallback Procedural Audio Synthesizer (Offline Safety Net)
  function getAudioContext() {
    if (!currentAudioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        currentAudioContext = new AudioCtx();
      }
    }
    if (currentAudioContext && currentAudioContext.state === 'suspended') {
      currentAudioContext.resume();
    }
    return currentAudioContext;
  }

  function synthesizeFallbackAudio(animal) {
    const ctx = getAudioContext();
    if (!ctx) return;
    const t = ctx.currentTime;

    switch (animal.soundType) {
      case 'lion-roar': {
        const osc = ctx.createOscillator();
        const subOsc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(110, t);
        osc.frequency.exponentialRampToValueAtTime(55, t + 1.2);

        subOsc.type = 'triangle';
        subOsc.frequency.setValueAtTime(65, t);
        subOsc.frequency.linearRampToValueAtTime(40, t + 1.2);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450, t);
        filter.frequency.exponentialRampToValueAtTime(180, t + 1.2);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.4, t + 0.2);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.4);

        osc.connect(filter);
        subOsc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        subOsc.start(t);
        osc.stop(t + 1.5);
        subOsc.stop(t + 1.5);
        break;
      }

      case 'wolf-howl': {
        const osc = ctx.createOscillator();
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(320, t);
        osc.frequency.linearRampToValueAtTime(680, t + 0.6);
        osc.frequency.linearRampToValueAtTime(420, t + 1.6);

        lfo.type = 'sine';
        lfo.frequency.setValueAtTime(5.5, t);
        lfoGain.gain.setValueAtTime(12, t);

        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.35, t + 0.3);
        gain.gain.linearRampToValueAtTime(0.3, t + 1.2);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 1.7);

        osc.connect(gain);
        gain.connect(ctx.destination);

        lfo.start(t);
        osc.start(t);
        lfo.stop(t + 1.8);
        osc.stop(t + 1.8);
        break;
      }

      default: {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, t);
        osc.frequency.exponentialRampToValueAtTime(1400, t + 0.25);
        osc.frequency.exponentialRampToValueAtTime(600, t + 0.5);

        gain.gain.setValueAtTime(0.01, t);
        gain.gain.linearRampToValueAtTime(0.3, t + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.55);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(t);
        osc.stop(t + 0.6);
        break;
      }
    }

    setTimeout(() => {
      if (activePlayingSpeciesId === animal.id) {
        activePlayingSpeciesId = null;
        syncAudioUI(null);
      }
    }, 1600);
  }

  // ==========================================================================
  // SPECIES DEEP-DIVE DOSSIER MODAL (Cinematic Photography Hero)
  // ==========================================================================
  function openSpeciesModal(speciesId) {
    const animal = SPECIES_DATA.find(s => s.id === speciesId);
    if (!animal || !modalContentBody) return;

    const isPinned = comparedSpeciesIds.includes(animal.id);
    const isPlaying = activePlayingSpeciesId === animal.id;
    const iucnClass = `iucn-${animal.iucn.toLowerCase()}`;

    modalContentBody.innerHTML = `
      <!-- Panoramic Wildlife Photography Showcase -->
      <div class="modal-dossier-photo-hero">
        <img 
          src="${animal.imageUrl}" 
          alt="${animal.commonName}" 
          class="modal-dossier-hero-img" 
          onerror="this.style.display='none';"
        >
      </div>

      <div class="modal-dossier-hero-info">
        <h2 style="font-family: var(--font-heading); font-size: 2.2rem; color: #fff; line-height: 1.15; margin-bottom: 4px;">
          ${animal.commonName}
        </h2>
        <p style="font-size: 1.1rem; font-style: italic; color: var(--emerald-light); margin-bottom: 10px;">
          ${animal.scientificName}
        </p>
        <div class="modal-chips-row">
          <span class="card-iucn-badge ${iucnClass}">IUCN: ${animal.iucnTitle} (${animal.iucn})</span>
          <span class="biome-chip active">${animal.biomeName}</span>
          <span class="biome-chip">${animal.diet}</span>
          <span class="biome-chip">Class: ${animal.class}</span>
        </div>
      </div>

      <p style="font-size: 1.05rem; line-height: 1.6; color: var(--text-primary); margin-bottom: 2rem;">
        ${animal.shortBio}
      </p>

      <div class="dossier-grid-section">
        <!-- Biological Metrics Box -->
        <div class="dossier-data-box">
          <h4 class="dossier-box-title">📊 Anatomical & Physical Stats</h4>
          <div class="dossier-spec-row">
            <span class="spec-key">Top Speed</span>
            <span class="spec-val">${formatSpeed(animal.topSpeedKmh)}</span>
          </div>
          <div class="dossier-spec-row">
            <span class="spec-key">Adult Weight</span>
            <span class="spec-val">${formatWeight(animal.weightKg)}</span>
          </div>
          <div class="dossier-spec-row">
            <span class="spec-key">Average Lifespan</span>
            <span class="spec-val">${animal.lifespanYears} Years</span>
          </div>
          <div class="dossier-spec-row">
            <span class="spec-key">Body Dimensions</span>
            <span class="spec-val">${animal.lengthM}</span>
          </div>
        </div>

        <!-- Taxonomy & Ecology Box -->
        <div class="dossier-data-box">
          <h4 class="dossier-box-title">🌿 Taxonomy & Ecological Role</h4>
          <div class="dossier-spec-row">
            <span class="spec-key">Order / Family</span>
            <span class="spec-val">${animal.order} / ${animal.family}</span>
          </div>
          <div class="dossier-spec-row">
            <span class="spec-key">Gestation / Incubation</span>
            <span class="spec-val">${animal.gestation}</span>
          </div>
          <div class="dossier-spec-row">
            <span class="spec-key">Social Organization</span>
            <span class="spec-val">${animal.socialStructure}</span>
          </div>
          <div class="dossier-spec-row">
            <span class="spec-key">Geographic Range</span>
            <span class="spec-val">${animal.nativeRange}</span>
          </div>
        </div>
      </div>

      <!-- Verified Fun Facts -->
      <div class="dossier-fun-facts">
        <h4 class="dossier-box-title" style="margin-bottom: 1rem;">💡 Fascinating Wildlife Adaptations</h4>
        <ul class="fun-facts-list">
          ${animal.funFacts.map(fact => `<li>${fact}</li>`).join('')}
        </ul>
      </div>

      <!-- Actions Bar -->
      <div class="modal-actions-bar">
        <button type="button" class="btn btn-primary" id="modalPlayAudioBtn">
          ${isPlaying ? '⏸ Pause Animal Call' : '🔊 Play Animal Call'}
        </button>
        <button type="button" class="btn btn-secondary" id="modalToggleCompareBtn">
          ${isPinned ? '✓ Pinned to Comparator' : '⚖️ Add to Comparator'}
        </button>
        <button type="button" class="btn btn-outline" id="modalCopyDossierBtn">
          📋 Copy Fact Sheet
        </button>
      </div>
    `;

    document.getElementById('modalPlayAudioBtn')?.addEventListener('click', () => {
      playAnimalSound(animal.id);
    });

    document.getElementById('modalToggleCompareBtn')?.addEventListener('click', () => {
      toggleCompareSpecies(animal.id);
      openSpeciesModal(animal.id);
    });

    document.getElementById('modalCopyDossierBtn')?.addEventListener('click', () => {
      copyAnimalDossier(animal);
    });

    speciesModalBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeSpeciesModal() {
    speciesModalBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  function copyAnimalDossier(animal) {
    const text = [
      `🐾 Gamility Explorer — ${animal.commonName} (${animal.scientificName})`,
      `Biome: ${animal.biomeName} | Class: ${animal.class} | IUCN: ${animal.iucnTitle} (${animal.iucn})`,
      `Top Speed: ${formatSpeed(animal.topSpeedKmh)} | Adult Weight: ${formatWeight(animal.weightKg)} | Lifespan: ${animal.lifespanYears} years`,
      `Native Range: ${animal.nativeRange}`,
      `Bio: ${animal.shortBio}`,
      `Fun Facts:`,
      ...animal.funFacts.map(f => ` • ${f}`),
      `Source: Gamility Explorer (https://mahesh-yennam.github.io/Gamility/explorer/animal-encyclopedia/index.html)`
    ].join('\n');

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast('✓ Animal Fact Sheet copied to clipboard!');
      });
    } else {
      showToast('Clipboard copy unavailable');
    }
  }

  // ==========================================================================
  // VIEW 4: WILDLIFE TRIVIA QUIZ MASTER
  // ==========================================================================
  let quizQuestions = [];
  let currentQuizIndex = 0;
  let quizScore = 0;

  function initQuiz() {
    const restartBtn = document.getElementById('quizRestartBtn');
    const returnBtn = document.getElementById('quizReturnGalleryBtn');

    restartBtn?.addEventListener('click', startNewQuiz);
    returnBtn?.addEventListener('click', () => switchView('gallery'));

    startNewQuiz();
  }

  function generateQuizQuestions() {
    return [
      {
        category: 'Speed Records',
        question: 'Which extraordinary creature is the fastest animal on Earth, reaching dive speeds of over 380 km/h (240 mph)?',
        options: ['Cheetah', 'Peregrine Falcon', 'Golden Eagle', 'Sailfish'],
        correctIndex: 1,
        explanation: 'The Peregrine Falcon reaches gravity-assisted hunting stoop dives exceeding 389 km/h (242 mph).'
      },
      {
        category: 'Ocean Giants',
        question: 'What is the heaviest animal to ever inhabit planet Earth?',
        options: ['Argentinosaurus', 'Blue Whale', 'African Bush Elephant', 'Colossal Squid'],
        correctIndex: 1,
        explanation: 'The Blue Whale can weigh up to 150 metric tons (330,000 lbs), heavier than any prehistoric dinosaur.'
      },
      {
        category: 'Biological Wonders',
        question: 'Which Mexican amphibian retains its feathery larval gills into adulthood and can regenerate complete limbs and spinal tissue?',
        options: ['Poison Dart Frog', 'Axolotl', 'Bullfrog', 'Fire Salamander'],
        correctIndex: 1,
        explanation: 'The Mexican Axolotl exhibits neoteny and possesses extraordinary cellular regeneration capabilities.'
      },
      {
        category: 'Unique Mammals',
        question: 'Which Australian monotreme (egg-laying mammal) possesses venomous calcaneus spurs on its hind legs?',
        options: ['Koala', 'Kangaroo', 'Duck-billed Platypus', 'Echidna'],
        correctIndex: 2,
        explanation: 'Male platypuses have venom glands delivering excruciating stings via hind ankle spurs.'
      },
      {
        category: 'Terrestrial Speed',
        question: 'What is the fastest terrestrial land animal on Earth, accelerating from 0 to 97 km/h in under 3 seconds?',
        options: ['Pronghorn Antelope', 'Cheetah', 'African Lion', 'Greyhound'],
        correctIndex: 1,
        explanation: 'The Cheetah can reach top speeds of 112 km/h (70 mph) with explosive acceleration.'
      },
      {
        category: 'Apex Predators',
        question: 'Which living reptile exerts the highest measured bite force in the animal kingdom (over 3,700 psi)?',
        options: ['Komodo Dragon', 'Saltwater Crocodile', 'American Alligator', 'Snapping Turtle'],
        correctIndex: 1,
        explanation: 'The Saltwater Crocodile commands a bone-shattering bite force of 16,460 Newtons (3,700 psi).'
      },
      {
        category: 'Reproductive Biology',
        question: 'How long is the gestation period of an African Bush Elephant?',
        options: ['9 Months', '12 Months', '18 Months', '22 Months'],
        correctIndex: 3,
        explanation: 'African elephants have the longest gestation of any mammal—approximately 22 months (nearly two years).'
      },
      {
        category: 'Desert Adaptations',
        question: 'What is the primary evolutionary purpose of the Fennec Fox’s oversized 15-cm ears?',
        options: ['Catching falling rain', 'Radiating desert body heat', 'Attracting mates', 'Intimidating predators'],
        correctIndex: 1,
        explanation: 'Their enormous vascular ears act as natural radiators to dispel intense Saharan desert heat.'
      },
      {
        category: 'Island Reptiles',
        question: 'What is the largest living species of lizard on Earth?',
        options: ['Nile Monitor', 'Komodo Dragon', 'Gila Monster', 'Marine Iguana'],
        correctIndex: 1,
        explanation: 'Komodo Dragons can grow up to 3 meters (10 feet) long and weigh over 85 kg.'
      },
      {
        category: 'Marine Senses',
        question: 'What specialized electro-receptive sensory organs allow great white sharks to detect prey heartbeats?',
        options: ['Lateral Lines', 'Ampullae of Lorenzini', 'Jacobson’s Organs', 'Nictitating Membranes'],
        correctIndex: 1,
        explanation: 'The Ampullae of Lorenzini are jelly-filled pores that sense electromagnetic fields emitted by living prey.'
      }
    ];
  }

  function startNewQuiz() {
    quizQuestions = generateQuizQuestions();
    currentQuizIndex = 0;
    quizScore = 0;

    const card = document.getElementById('quizCard');
    const finishCard = document.getElementById('quizFinishedCard');
    if (card) card.classList.remove('hidden');
    if (finishCard) finishCard.classList.add('hidden');

    renderCurrentQuizQuestion();
  }

  function renderCurrentQuizQuestion() {
    const q = quizQuestions[currentQuizIndex];
    if (!q) return;

    const currentQEl = document.getElementById('quizCurrentQ');
    const totalQEl = document.getElementById('quizTotalQ');
    const scoreNumEl = document.getElementById('quizScoreNum');
    const attemptedEl = document.getElementById('quizCurrentAttempted');
    const progressFill = document.getElementById('quizProgressFill');
    const categoryTag = document.getElementById('quizCategoryTag');
    const questionTitle = document.getElementById('quizQuestionText');
    const optionsList = document.getElementById('quizOptionsList');
    const feedbackBox = document.getElementById('quizFeedbackBox');

    if (currentQEl) currentQEl.textContent = currentQuizIndex + 1;
    if (totalQEl) totalQEl.textContent = quizQuestions.length;
    if (scoreNumEl) scoreNumEl.textContent = quizScore;
    if (attemptedEl) attemptedEl.textContent = currentQuizIndex;
    if (progressFill) progressFill.style.width = `${((currentQuizIndex + 1) / quizQuestions.length) * 100}%`;
    if (categoryTag) categoryTag.textContent = q.category;
    if (questionTitle) questionTitle.textContent = q.question;
    if (feedbackBox) feedbackBox.classList.add('hidden');

    if (optionsList) {
      optionsList.innerHTML = q.options.map((opt, i) => `
        <button type="button" class="quiz-opt-btn" data-opt-index="${i}">
          ${String.fromCharCode(65 + i)}. ${opt}
        </button>
      `).join('');

      optionsList.querySelectorAll('.quiz-opt-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const selectedIdx = parseInt(btn.getAttribute('data-opt-index'), 10);
          handleQuizAnswer(selectedIdx, q);
        });
      });
    }
  }

  function handleQuizAnswer(selectedIdx, q) {
    const optionsList = document.getElementById('quizOptionsList');
    const feedbackBox = document.getElementById('quizFeedbackBox');
    const indicator = document.getElementById('feedbackIndicator');
    const explanation = document.getElementById('feedbackExplanation');
    const nextBtn = document.getElementById('quizNextBtn');
    const scoreNumEl = document.getElementById('quizScoreNum');
    const attemptedEl = document.getElementById('quizCurrentAttempted');

    const buttons = optionsList?.querySelectorAll('.quiz-opt-btn') || [];
    buttons.forEach(b => b.disabled = true);

    const isCorrect = selectedIdx === q.correctIndex;
    if (isCorrect) {
      quizScore++;
      buttons[selectedIdx]?.classList.add('correct');
      if (indicator) {
        indicator.textContent = '✓ Correct Answer!';
        indicator.style.color = '#34d399';
      }
    } else {
      buttons[selectedIdx]?.classList.add('wrong');
      buttons[q.correctIndex]?.classList.add('correct');
      if (indicator) {
        indicator.textContent = '✗ Incorrect';
        indicator.style.color = '#f87171';
      }
    }

    if (scoreNumEl) scoreNumEl.textContent = quizScore;
    if (attemptedEl) attemptedEl.textContent = currentQuizIndex + 1;
    if (explanation) explanation.textContent = q.explanation;
    if (feedbackBox) feedbackBox.classList.remove('hidden');

    if (nextBtn) {
      const isLastQuestion = currentQuizIndex === quizQuestions.length - 1;
      nextBtn.textContent = isLastQuestion ? 'View Quiz Results →' : 'Next Question →';
      nextBtn.onclick = () => {
        currentQuizIndex++;
        if (currentQuizIndex < quizQuestions.length) {
          renderCurrentQuizQuestion();
        } else {
          finishQuiz();
        }
      };
    }
  }

  function finishQuiz() {
    const card = document.getElementById('quizCard');
    const finishCard = document.getElementById('quizFinishedCard');
    const finalScoreVal = document.getElementById('finalScoreVal');
    const finalPercentVal = document.getElementById('finalPercentVal');
    const finalEvalText = document.getElementById('finalEvalText');

    if (card) card.classList.add('hidden');
    if (finishCard) finishCard.classList.remove('hidden');

    const total = quizQuestions.length;
    const percent = Math.round((quizScore / total) * 100);

    if (finalScoreVal) finalScoreVal.textContent = quizScore;
    if (finalPercentVal) finalPercentVal.textContent = `${percent}%`;

    if (finalEvalText) {
      if (percent >= 90) {
        finalEvalText.textContent = 'Outstanding! You are a master zoologist with world-class biodiversity knowledge.';
      } else if (percent >= 70) {
        finalEvalText.textContent = 'Great job! You have a solid grasp of Earth’s wildlife taxonomy and adaptations.';
      } else {
        finalEvalText.textContent = 'Good effort! Revisit the species catalog dossiers and take the quiz again to hone your score!';
      }
    }
  }

  // ==========================================================================
  // TOAST NOTIFICATIONS
  // ==========================================================================
  function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  }

  // Public namespace for inline button triggers
  window.GamilityAnimals = {
    openModal: openSpeciesModal,
    playSound: playAnimalSound,
    toggleCompare: toggleCompareSpecies
  };

  // Launch on DOM ready
  document.addEventListener('DOMContentLoaded', init);

})();
