export type TreeDataType = {
  name: string;
  image_url: string;
  mate?: TreeDataType;
  extend?: boolean;
  children?: Array<TreeDataType>;
};

export const treeViewData: TreeDataType = {
  name: "Smt Kunjulakshmi Amma",
  image_url: "/img/person-placeholder.png",
  mate: {
    name: "Shri Parameshwara Panicker",
    image_url: "/img/person-placeholder.png",
  },
  extend: false,
  children: [
    {
      name: "Smt Janaki Amma",
      image_url: "/img/person-placeholder.png",
      mate: {
        name: "Shri Sankara Panicker",
        image_url: "/img/person-placeholder.png",
      },
      extend: false,
      children: [
        {
          name: "Smt Ponnamma",
          image_url: "/img/person-placeholder.png",
          mate: {
            name: "Shri Balan",
            image_url: "/img/person-placeholder.png",
          },
          children: [
            {
              name: "Shri Shashi",
              image_url: "/img/person-placeholder.png",
              children: [
                {
                  name: "Shri Ajay",
                  image_url: "/img/person-placeholder.png",
                },
                {
                  name: "Shri Vijay",
                  image_url: "/img/person-placeholder.png",
                },
              ],
            },
          ],
        },
        {
          name: "Smt Saraswati",
          image_url: "/img/person-placeholder.png",
          mate: {
            name: "Shri Vishwanathan Panicker",
            image_url: "/img/person-placeholder.png",
          },
          children: [
            {
              name: "Smt Lalitha",
              image_url: "/img/person-placeholder.png",
              children: [
                {
                  name: "Smt Sashikala",
                  image_url: "/img/person-placeholder.png",
                  children: [
                    {
                      name: "Smt Shreya",
                      image_url: "/img/person-placeholder.png",
                    },
                  ],
                },
                {
                  name: "Smt Shantini",
                  image_url: "/img/person-placeholder.png",
                  children: [
                    {
                      name: "Smt Shriparvati",
                      image_url: "/img/person-placeholder.png",
                    },
                  ],
                },
                {
                  name: "Smt Sharanya",
                  image_url: "/img/person-placeholder.png",
                },
              ],
            },
            {
              name: "Shri Gopalakrishnan",
              image_url: "/img/person-placeholder.png",
              children: [
                {
                  name: "Shri Girish",
                  image_url: "/img/person-placeholder.png",
                },
                {
                  name: "Shri Abhishek",
                  image_url: "/img/person-placeholder.png",
                },
              ],
            },
            {
              name: "Shri Muralikrishnan",
              image_url: "/img/person-placeholder.png",
              children: [
                {
                  name: "Smt Laxmi",
                  image_url: "/img/person-placeholder.png",
                },
              ],
            },
            {
              name: "Smt Rama",
              image_url: "/img/person-placeholder.png",
              children: [
                {
                  name: "Smt Laxmi",
                  image_url: "/img/person-placeholder.png",
                },
                {
                  name: "Shri Anand",
                  image_url: "/img/person-placeholder.png",
                },
              ],
            },
          ],
        },
        {
          name: "Shri Ramendran",
          image_url: "/img/person-placeholder.png",
          children: [
            {
              name: "Shri Rajesh",
              image_url: "/img/person-placeholder.png",
            },
            {
              name: "Shri Ratish",
              image_url: "/img/person-placeholder.png",
            },
            {
              name: "Shri Rajnish",
              image_url: "/img/person-placeholder.png",
            },
          ],
        },
      ],
    },
    {
      name: "Smt GauriKutti Amma",
      image_url: "/img/person-placeholder.png",
      extend: false,
      children: [
        {
          name: "Smt Devakiamma",
          image_url: "/img/person-placeholder.png",
          children: [
            {
              name: "Smt Devi",
              image_url: "/img/person-placeholder.png",
            },
            {
              name: "Smt Thankam",
              image_url: "/img/person-placeholder.png",
            },
            {
              name: "Smt Sati",
              image_url: "/img/person-placeholder.png",
            },
            {
              name: "Shri Muralidharan",
              image_url: "/img/person-placeholder.png",
            },
          ],
        },
        {
          name: "Shri Gopalakrishnan",
          image_url: "/img/person-placeholder.png",
          children: [
            {
              name: "Smt Divya(Asha)",
              image_url: "/img/person-placeholder.png",
              children: [
                {
                  name: "Rohit(Monu)",
                  image_url: "/img/person-placeholder.png",
                },
                {
                  name: "Ammu",
                  image_url: "/img/person-placeholder.png",
                },
              ],
            },
            {
              name: "Smt Deepti(Maya)",
              image_url: "/img/person-placeholder.png",
              children: [
                {
                  name: "Dhyuti",
                  image_url: "/img/person-placeholder.png",
                },
                {
                  name: "Drupad",
                  image_url: "/img/person-placeholder.png",
                },
              ],
            },
            {
              name: "Shri Dipin(Muthu)",
              image_url: "/img/person-placeholder.png",
              children: [
                {
                  name: "Diya",
                  image_url: "/img/person-placeholder.png",
                },
                {
                  name: "Daksha",
                  image_url: "/img/person-placeholder.png",
                },
              ],
            },
          ],
        },
        {
          name: "Shri Bhaskaran",
          image_url: "/img/person-placeholder.png",
          children: [
            {
              name: "Smt Seema",
              image_url: "/img/person-placeholder.png",
              children: [
                {
                  name: "Chinmayee",
                  image_url: "/img/person-placeholder.png",
                },
              ],
            },
            {
              name: "Shri Sajan(Biju)",
              image_url: "/img/person-placeholder.png",
              children: [
                {
                  name: "Devika",
                  image_url: "/img/person-placeholder.png",
                },
                {
                  name: "Anvika",
                  image_url: "/img/person-placeholder.png",
                },
              ],
            },
          ],
        },
        {
          name: "Shri Sreedharan",
          image_url: "/img/person-placeholder.png",
        },
        {
          name: "Smt Radhamma",
          image_url: "/img/person-placeholder.png",
          children: [
            {
              name: "Smt Anuradha(Simi)",
              image_url: "/img/person-placeholder.png",
              children: [
                {
                  name: "Devika",
                  image_url: "/img/person-placeholder.png",
                },
                {
                  name: "Anvika",
                  image_url: "/img/person-placeholder.png",
                },
              ],
            },
            {
              name: "Shri Anoop(Sinu)",
              image_url: "/img/person-placeholder.png",
              children: [
                {
                  name: "Aryan",
                  image_url: "/img/person-placeholder.png",
                },
                {
                  name: "Aradhya",
                  image_url: "/img/person-placeholder.png",
                },
              ],
            },
          ],
        },
        {
          name: "Shri Radhakrishnan",
          image_url: "/img/person-placeholder.png",
        },
        {
          name: "Shri Unnikrishnan",
          image_url: "/img/person-placeholder.png",
        },
        {
          name: "Smt Mani",
          image_url: "/img/person-placeholder.png",
        },
        {
          name: "Shri Sivasankaran",
          image_url: "/img/person-placeholder.png",
        },
      ],
    },
    {
      name: "Shri Vasu Panicker",
      image_url: "/img/person-placeholder.png",
    },
    {
      name: "Smt Meenakshi Amma",
      image_url: "/img/person-placeholder.png",
    },
    {
      name: "Smt Thankamma",
      image_url: "/img/person-placeholder.png",
    },
    {
      name: "Smt Eshwari Amma",
      image_url: "/img/person-placeholder.png",
    },
  ],
};
