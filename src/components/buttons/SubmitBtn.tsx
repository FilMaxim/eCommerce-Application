export interface SubmitBtnProps {
  title: string;
}

export const SubmitBtn = ({ title }: SubmitBtnProps) => {
  return (
    <>
      <button
        type="submit"
        className="mt-3 w-[16rem] self-center rounded bg-secondary px-4 py-2 font-bold text-white transition-all hover:bg-red-600"
      >
        {title}
      </button>
    </>
  );
};
