import { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { html } = req.body;

    if (!html) {
      return res.status(400).json({ error: 'HTML content is required' });
    }

    try {
      console.log(html)
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setContent(html);
      await page.screenshot()
      const pdfBuffer = await page.pdf({ format: 'a4' });
    

      await browser.close();

      res.setHeader('Content-Type', 'application/pdf');
      res.send(pdfBuffer);
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate PDF' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};
