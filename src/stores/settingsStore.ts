import { create } from "zustand";
import { AppSettings } from "../types/AppSettings";

interface SettingsStore {
  settings: AppSettings;

  updateSettings: (
    settings: Partial<AppSettings>
  ) => void;

  resetSettings: () => void;
}

const defaultSettings: AppSettings = {
  darkMode: false,

  recycleBinRetentionDays: 30,

  allowInvoiceEditing: true,

  language: "bn",
};

export const useSettingsStore =
  create<SettingsStore>((set) => ({
    settings: defaultSettings,

    updateSettings: (
      updatedSettings
    ) =>
      set((state) => ({
        settings: {
          ...state.settings,
          ...updatedSettings,
        },
      })),

    resetSettings: () =>
      set({
        settings: defaultSettings,
      }),
  }));
