import { PortalSurveyCategory, PortalTemplateTile } from './index';
/*
    This class manipulate the namings, colors, images, etc for the logged in user.  Data is coming from p6 database.
*/

export class CompanyTemplate {

    constructor(public portalSetupTemplateUID: string,
        public sName: string,
        public sDescription: string,
        public sCompanyColor: string,
        public sPersonalTabName: string,
        public sTeamTabName: string,
        public sEmployeeDirectoryName: string,
        public sOverdueStatusName: string,
        public sOverdueStatusColor: string,
        public bShowOverdueStatus: boolean,
        public sDraftStatusName: string,
        public sDraftStatusColor: string,
        public bShowDraftStatus: boolean,
        public sToCompleteName: string,
        public sToCompleteColor: string,
        public bShowToCompleteStatus: boolean,
        public sComingUpName: string,
        public sComingUpColor: string,
        public bShowComingUpStatus: boolean,
        public sOptionalStatusName: string,
        public sOptionalStatusColor: string,
        public sFeedbackStatusColor: string,
        public sFeedbackStatusName: string,
        public sApproveStatusName: string,
        public bShowApproveStatus: boolean,
        public sApproveStatusColor: string,
        public bShowOptionalStatus: boolean,
        public sInformation: string,
        public bLogoImage: string,
        public bBackgroundImage: boolean,
        public bShowResourcesLink: boolean,
        public bShowMyMaxLink: boolean,
        public bShowSupportLink: boolean,
        public bShowSkillsQuestionnaireLink: boolean,
        public bShowEmployeeDirectory: boolean,
        public linkedTiles: PortalTemplateTile[],
        public linkedSurveyCategories: PortalSurveyCategory[],
        public sCompletedName: string,
        public sCompletedColor: string,
        public bShowCompletedStatus: boolean,
        public bShowNavigationMenu: boolean,
        public bSwicthOnNavigationMenu: boolean,
        public bShowProfilePage: boolean,
        public bShowPersonalDocuments: boolean,
        public bShowPeriodSummaryReport: boolean,
        public bShowProjectPlanLink: boolean,
        public bActivatePasswordExpiry: boolean,
        public sProjectPlanTemplatePath: string,
        public sProjectPlanTemplateName: string,
        public bShowExitInterviewLink: boolean,
    ) { }
}
