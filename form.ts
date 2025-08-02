const inputEl = document.getElementById("user-name") as HTMLInputElement | null;

if (!inputEl) {
  throw new Error("Element not found");
}

//this sort of operation is like a whne you have value in the input elmement access the value otherwise dont do anything
console.log(inputEl?.value);
