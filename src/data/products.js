import hcBag from "../assets/hc-bag.jpeg";
import hcJacket from "../assets/hc-jacket.jpeg";
import hcJacket1 from "../assets/hc-jacket1.jpeg";
import hcTotebag from "../assets/hc-totebag.jpeg";

export const products = [
  {
    id: 1,
    name: "Reforged Denim Trench",
    price: 480,
    material: "Denim",
    type: "Outerwear",
    image: hcJacket,
    description: "A floor-length trench rebuilt from reclaimed workwear denim, pieced so every seam falls somewhere new.",
    origin: "Denim collected from a tailoring cooperative in Nairobi.",
    artisan: "Amara K.",
    story: "Each pair of jeans was stripped to its strongest panels before being repieced into the trench body.",
  },
  {
    id: 2,
    name: "Salvage Silk Wrap Blouse",
    price: 260,
    material: "Silk",
    type: "Tops",
    image: hcJacket1,
    description: "A wrap blouse cut from deadstock silk, finished with a hand-rolled hem.",
    origin: "Deadstock silk scarves sourced from a closing textile importer.",
    artisan: "Naledi P.",
    story: "The scarves' original border patterns were kept intact along the cuffs and collar.",
  },
  {
    id: 3,
    name: "Remnant Wool Overcoat",
    price: 620,
    material: "Wool",
    type: "Outerwear",
    image: hcBag,
    description: "A structured overcoat built from reclaimed wool coating, lined in repurposed blanket fabric.",
    origin: "Wool coating offcuts from a closed tailoring house.",
    artisan: "Amara K.",
    story: "The lining was cut from a single worn wool blanket, chosen for its faded rust-and-charcoal check.",
  },
  {
    id: 4,
    name: "Quilted Canvas Tote",
    price: 140,
    material: "Canvas",
    type: "Accessories",
    image: hcTotebag,
    description: "A structured tote quilted from reclaimed canvas work aprons.",
    origin: "Canvas aprons from a shuttered upholstery workshop.",
    artisan: "Studio team",
    story: "Faint chalk marks from the aprons' original use were left visible on the lining as part of the finished piece.",
  },
];