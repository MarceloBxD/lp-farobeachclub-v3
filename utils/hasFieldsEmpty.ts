type Form = {
  date: string;
  tipo: string;
  email: string;
  phone: string;
  firstname: string;
};

export const hasFieldsEmpty = (form: Form) => {
  if (
    form.date === "" ||
    form.tipo === "" ||
    form.email === "" ||
    form.phone === "" ||
    form.firstname === ""
  ) {
    return true;
  }

  return false;
};
