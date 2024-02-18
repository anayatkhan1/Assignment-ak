import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Phone, Globe, Heart, Pencil, Trash } from "lucide-react";
const Card = () => {
  const ItemList = [
    {
      id: 1,
      name: "Anayat",
      email: "anayat0khan@gmail.com",
      phone: "11-222-2333-21",
      site: "https://anayat.vercel.app",
    },
    {
      id: 2,
      name: "leonardo",
      email: "anayat0khan@gmail.com",
      phone: "11-222-2333-21",
      site: "https://anayat.vercel.app",
    },
    {
      id: 3,
      name: "Davinci",
      email: "anayat0khan@gmail.com",
      phone: "11-3233-222-111",
      site: "https://anayat.vercel.app",
    },
    {
      id: 4,
      name: "patrick",
      email: "anayat0khan@gmail.com",
      phone: "11-222-2333-21",
      site: "https://anayat.vercel.app",
    },
    {
      id: 5,
      name: "Dodge",
      email: "anayat0khan@gmail.com",
      phone: "11-222-2333-21",
      site: "https://anayat.vercel.app",
    },
  ];

  const [list, setList] = useState(ItemList);
  const [modal, setModal] = useState(false);

  function handleRemove(id: number) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  function toggleModal() {
    setModal(!modal);
  }
  interface IFormInput {
    name: string;
    email: string;
    phone: number;
    site: string;
  }

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = () => {
    // const name = e.target.name;
    // const email = e.target.email;
    // const phone = e.target.phone;
    // const site = e.target.site;
  };

  return (
    <>
      {list.map((item) => (
        <div className="card-content" key={item.id}>
          <div className="profile">
            <img
              alt="profile"
              src="/profile.png"
              width={200}
              height={200}
            />
          </div>
          <div className="profile-detail" key={item.id}>
            <h3>{item.name}</h3>
            <div className="content">
              <div>
                <Mail width={15} />
                {item.email}
              </div>
              <div>
                <Phone width={15} />
                {item.phone}
              </div>
              <div>
                <Globe width={15} />
                {item.site}
              </div>
            </div>
          </div>

          <div className="card-footer">
            <Heart />
            <div onClick={() => toggleModal()}>
              <Pencil />
            </div>
            <div onClick={() => handleRemove(item.id)}>
              <Trash />
            </div>
          </div>
        </div>
      ))}
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Basic Modal</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <label>Name</label>
              <input {...register("name")} onChange={handleChange} />

              <label>Email</label>
              <input {...register("email")} onChange={handleChange} />

              <div className="input-group">
                <div className="input-field">
                  <label>Phone</label>
                  <input {...register("phone")} onChange={handleChange} />
                </div>
                <div className="input-field">
                  <label>Website</label>
                  <input {...register("site")} onChange={handleChange} />
                </div>
              </div>
              <div className="modal-submit">
                <button className="close-modal" onClick={toggleModal}>
                  CLOSE
                </button>
                <button
                  type="submit"
                  className="close-modal-2"
                  onClick={toggleModal}
                >
                  OK
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
