import BookList from "@/components/BookList";
import { Button } from "@/components/ui/button";
import { signOut } from "@/auth";
import React from "react";
import { sampleBooks } from "../../../constants/index";

const page = () => {
  return (
    <>
      <form
        className="mb-10"
        action={async () => {
          "use server";

          await signOut();
        }}
      >
        <Button>Logout</Button>
      </form>

      <BookList title="Borrowed Books" books={sampleBooks} />
    </>
  );
};

export default page;
