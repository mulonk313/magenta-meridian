export async function GET({ url }: { url: URL }) {
  const pathParts = url.pathname.split('/').filter(Boolean);
  const lang = (pathParts[1] || 'en') as keyof AboutInfo;

  type AboutInfo = {
    [key: string]: {
      description: string;
      future: string;
      interviewContent: string;
    };
  };

  const aboutInfo: AboutInfo = {
    en: {
      description: "My name is Karounis Ioannis and I have a bachelor's degree...",
      future: "To be honest, 5 years is a lot of time...",
      interviewContent: "In our conversation, we discussed a lot about technologies...",
    },
    gr: {
      description: "Ονομάζομαι Καρούνης Ιωάννης και έχω πτυχίο...",
      future: "Για να είμαι ειλικρινής, 5 χρόνια είναι πολύς χρόνος...",
      interviewContent: "Στη συζήτησή μας, συζητήσαμε πολλά για τις τεχνολογίες...",
    },
  };

   const selectedData = aboutInfo[lang] || aboutInfo['en'];

  return new Response(JSON.stringify(selectedData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
