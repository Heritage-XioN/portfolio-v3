import { UsesCard, UsesItem } from "@/components/ui/uses-card";

export function UsesContent() {
  return (
    <section className="space-y-6 pb-12">
      {/* Hardware */}
      <UsesCard title="Hardware">
        <UsesItem label="Laptop" value='Apple MacBook Pro 13" (2020)' />
        <UsesItem
          label="Monitor"
          value="Dell UltraSharp U2723QE"
          href="https://www.dell.com"
        />
        <UsesItem
          label="Monitor Light"
          value="BenQ ScreenBar Halo"
          href="https://www.benq.com"
        />
        <UsesItem label="Headphones" value="Sennheiser Momentum M3" />
        <UsesItem
          label="Speakers"
          value="Audioengine A1 Wireless"
          href="https://audioengine.com"
        />
        <UsesItem
          label="Mouse"
          value="Logitech MX Master 2S"
          href="https://www.logitech.com"
        />
      </UsesCard>

      {/* Workspace */}
      <UsesCard title="Workspace">
        <UsesItem label="Chair" value="Herman Miller Mirra 2" />
        <UsesItem
          label="Standing Desk"
          value="Jarvis Bamboo"
          href="https://www.fully.com"
        />
        <UsesItem
          label="Desk Pad"
          value="Grovemade Wool Felt"
          href="https://grovemade.com"
        />
        <UsesItem
          label="Desk Shelf"
          value="Grovemade Walnut"
          href="https://grovemade.com"
        />
        <UsesItem
          label="Desk Tray"
          value="Grovemade Tray"
          href="https://grovemade.com"
        />
      </UsesCard>

      {/* Dev Tools + Productivity side by side */}
      <div className="grid gap-6 md:grid-cols-2">
        <UsesCard title="Dev Tools">
          <UsesItem
            label="IDE"
            value="Visual Studio Code"
            href="https://code.visualstudio.com"
          />
          <UsesItem label="Font" value="CamingoCode" />
          <UsesItem
            label="Terminal"
            value="Warp"
            href="https://www.warp.dev"
          />
          <UsesItem
            label="Shell"
            value="Zsh"
            href="https://www.zsh.org"
          />
          <UsesItem
            label="Browser"
            value="Chrome"
            href="https://www.google.com/chrome"
          />
          <UsesItem
            label="Design"
            value="Figma"
            href="https://www.figma.com"
          />
        </UsesCard>

        <UsesCard title="Productivity">
          <UsesItem
            label="Notes / Docs"
            value="Notion"
            href="https://www.notion.so"
          />
          <UsesItem
            label="Tasks"
            value="Notion"
            href="https://www.notion.so"
          />
          <UsesItem
            label="Todo"
            value="Microsoft To Do"
            href="https://todo.microsoft.com"
          />
          <UsesItem
            label="Time Tracker"
            value="Flow"
            href="https://www.getflow.com"
          />
          <UsesItem
            label="Launcher"
            value="Raycast"
            href="https://www.raycast.com"
          />
        </UsesCard>
      </div>

      {/* Attribution */}
      <p className="pt-4 text-sm text-slate-500">
        * Inspired by{" "}
        <a
          href="https://wesbos.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 transition-colors hover:text-white"
        >
          Wes Bos
        </a>{" "}
        and his cool project -{" "}
        <a
          href="https://uses.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 transition-colors hover:text-white"
        >
          https://uses.tech/
        </a>
      </p>
    </section>
  );
}
