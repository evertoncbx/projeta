import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProjectProvider, useProject } from './context/ProjectContext';
import { LoginModal } from './components/LoginModal';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { NewProjectWizard } from './components/NewProjectWizard';
import { Rocket, Plus } from 'lucide-react';

import { KanbanBoard } from './components/kanban/KanbanBoard';
import { JourneyTab } from './components/tabs/JourneyTab';
import { EyeOfCompetenceTab } from './components/tabs/EyeOfCompetenceTab';
import { TapTab } from './components/tabs/TapTab';
import { ScopeTab } from './components/tabs/ScopeTab';
import { WbsTab } from './components/tabs/WbsTab';
import { ScheduleTab } from './components/tabs/ScheduleTab';
import { ResourcesTab } from './components/tabs/ResourcesTab';
import { StakeholdersTab } from './components/tabs/StakeholdersTab';
import { RaciTab } from './components/tabs/RaciTab';
import { CommunicationTab } from './components/tabs/CommunicationTab';
import { BudgetTab } from './components/tabs/BudgetTab';
import { RisksTab } from './components/tabs/RisksTab';
import { QualityTab } from './components/tabs/QualityTab';
import { LessonsTab } from './components/tabs/LessonsTab';
import { ClosingTab } from './components/tabs/ClosingTab';
import { VersionsTab } from './components/tabs/VersionsTab';

const MainLayout: React.FC = () => {
  const { currentTab, projects, currentProject } = useProject();
  const { user } = useAuth();
  const [wizardOpen, setWizardOpen] = useState(false);
  const isEmptyState = projects.length === 0 || currentProject.id === '__empty__';

  const renderActiveTab = () => {
    switch (currentTab) {
      case 'journey':
      case 'kanban':
        return <KanbanBoard onOpenNewProject={() => setWizardOpen(true)} />;
      case 'eye':
        return <EyeOfCompetenceTab />;
      case 'tap':
        return <TapTab />;
      case 'stakeholders':
        return <StakeholdersTab />;
      case 'scope':
        return <ScopeTab />;
      case 'wbs':
        return <WbsTab />;
      case 'schedule':
        return <ScheduleTab />;
      case 'resources':
        return <ResourcesTab />;
      case 'raci':
        return <RaciTab />;
      case 'communication':
        return <CommunicationTab />;
      case 'budget':
        return <BudgetTab />;
      case 'risks':
        return <RisksTab />;
      case 'quality':
        return <QualityTab />;
      case 'lessons':
        return <LessonsTab />;
      case 'closing':
        return <ClosingTab />;
      case 'versions':
        return <VersionsTab />;
      default:
        return <KanbanBoard onOpenNewProject={() => setWizardOpen(true)} />;
    }
  };

  return (
    <div className="projectus-white-theme flex flex-col h-screen w-screen overflow-hidden bg-[#F4F7FC] text-[#001364]">
      <Navbar onOpenNewProject={() => setWizardOpen(true)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-[#F4F7FC]">
          <div className="max-w-6xl mx-auto space-y-6">
            {isEmptyState && currentTab !== 'journey' && currentTab !== 'kanban' && (
              <div className="rounded-2xl border border-[#DCE6F5] bg-white p-5 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EBF4FF] border border-[#A9D7FF] text-[#FF8A16]">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#001364]">
                      Ambiente Exclusivo de {user || 'Usuário'} — Todos os Módulos Zerados
                    </h3>
                    <p className="text-xs text-[#3B4D71] mt-0.5">
                      Você ainda não possui projetos cadastrados. Todos os módulos abaixo estão zerados para você começar do zero e gerenciar exclusivamente os seus projetos.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setWizardOpen(true)}
                  className="preserve-white-text flex items-center justify-center gap-1.5 rounded-xl bg-[#FF8A16] hover:bg-[#E3650D] px-4 py-2.5 text-xs font-bold text-white transition shadow-md shadow-[#FF8A16]/25 shrink-0 cursor-pointer"
                >
                  <Plus className="h-4 w-4" />
                  <span>Criar Meu Primeiro Projeto</span>
                </button>
              </div>
            )}
            {renderActiveTab()}
          </div>
        </main>
      </div>

      <NewProjectWizard isOpen={wizardOpen} onClose={() => setWizardOpen(false)} />
      <LoginModal />
    </div>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <ProjectProvider>
        <MainLayout />
      </ProjectProvider>
    </AuthProvider>
  );
}
