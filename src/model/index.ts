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
      name: "Shri GauriKutti Amma",
      image_url: "/img/person-placeholder.png",
      extend: false,
      children: [
        {
          name: "Shri Devakiamma",
          image_url: "/img/person-placeholder.png",
        },
        {
          name: "Shri Gopalakrishnan",
          image_url: "/img/person-placeholder.png",
        },
        {
          name: "Shri Bhaskaran",
          image_url: "/img/person-placeholder.png",
        },
        {
          name: "Shri Sreedharan",
          image_url: "/img/person-placeholder.png",
        },
        {
          name: "Smt Radhamma",
          image_url: "/img/person-placeholder.png",
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
