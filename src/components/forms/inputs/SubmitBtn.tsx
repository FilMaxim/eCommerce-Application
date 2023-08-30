export interface SubmitBtnProps {
  title: string;
}

export const SubmitBtn = ({ title }: SubmitBtnProps) => {
  return (
    <>
      <button
        type="submit"
        className="mt-3 w-full self-center rounded bg-red-600 px-4 py-2 font-bold text-white transition-all hover:bg-red-700"
      >
        {title}
      </button>
    </>
  );
};
